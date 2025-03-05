"use client";

import { useState, useEffect, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchMatches } from "@/lib/api";
import { AllMatchStatus, Match } from "@/lib/types";
import FilterControls from "./FilterControls";
import MatchItem from "./MatchItem";
import { useMatchesWebSocker } from "@/lib/hooks";
import { Loader } from "./icons";

export default function MatchList() {
  const [filter, setFilter] = useState<AllMatchStatus>("all");
  const {
    data: matches,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useMatchesWebSocker();

  const filteredMatches =
    filter === "all" ? matches : matches?.filter((m) => m.status === filter);

  if (isLoading)
    return (
      <div className="text-center mt-10">
        Загрузка...
        <Loader loading={isLoading} />
      </div>
    );

  console.log(matches);

  return (
    <div className="container m-auto mt-6 px-2 sm:px-0">
      <div className="block justify-between mb-4 sm:flex">
        <div className="sm:flex items-center justify-center gap-6 mb-1 sm:0">
          <h1 className="font-[Tactic Sans] text-center font-bold italic text-[32px] leading-[32px] tracking-[0%]  mb-1 sm:0">
            Match Tracker
          </h1>
          <FilterControls setFilter={setFilter} activeFilter={filter} />
        </div>
        <div>
          {isError && (
            <div className="bg-[#0F1318] w-full sm:w-[480px] h-[56px] gap-[10px] rounded-[4px] p-[16px] text-center text-white">
              Ошибка: не удалось загрузить информацию
            </div>
          )}
          <button
            onClick={() => refetch()}
            className="flex w-full sm:w-[204px] items-center justify-center h-[56px] gap-[10px] rounded-[4px] p-[16px] text-white hover:cursor-pointer bg-[#EB0237]"
          >
            Обновить
            <Loader loading={isFetching} />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {filteredMatches?.map((match) => (
          <MatchItem key={match.time} match={match} />
        ))}
      </div>
    </div>
  );
}
