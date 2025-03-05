import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchMatches, QUERY_KEYS } from "./api";
import { Match } from "./types";

export const useMatchesWebSocker = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ws = new WebSocket("wss://app.ftoyd.com/fronttemp-service/ws");
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      queryClient.setQueryData<Match[]>([QUERY_KEYS.get.matches], (oldData) => {
        if (!oldData) return oldData;
        if (message.type === "update_matches") {
          return message.data;
        }
      });
    };
    return () => ws.close();
  }, [queryClient]);

  return useQuery({
    queryKey: [QUERY_KEYS.get.matches],
    queryFn: fetchMatches,
  });
};
