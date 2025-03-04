import { ApiResponse, Match } from "./types";

export const fetchMatches = async (): Promise<Match[]> => {
  const response = await fetch(
    "https://app.ftoyd.com/fronttemp-service/fronttemp"
  );
  if (!response.ok) throw new Error("Network response was not ok");
  const data: ApiResponse = await response.json();
  if (!data.ok) throw new Error("API error");
  return data.data.matches.map((match) => ({ ...match, events: [] }));
};

export const QUERY_KEYS = {
  get: {
    matches: "matches",
  },
};
