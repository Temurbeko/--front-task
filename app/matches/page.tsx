"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MatchList from "@/components/MatchList";

const queryClient = new QueryClient();

export default function MatchesPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MatchList />
    </QueryClientProvider>
  );
}
