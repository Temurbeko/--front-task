"use client";

import { useState } from "react";
import { Match } from "@/lib/types";
import MatchDetails from "./MatchDetails";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "./icons";

interface MatchItemProps {
  match: Match;
}

export default function MatchItem({ match }: MatchItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusBgColor =
    match.status === "Finished"
      ? "bg-[#EB0237]"
      : match.status === "Scheduled"
      ? "bg-orange-500"
      : "bg-[#43AD28]";

  return (
    <div
      className="bg-[#0B0E12] p-2 sm:p-4 h-min-[90px] rounded-lg shadow-md cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <div className="text-left">
          <span className="font-semibold text-gray-100 flex items-center gap-1 sm:gap-2.5 text-sm sm:text-[16px]">
            <Image
              width={30}
              height={30}
              alt="avatar"
              src={"/illustrations_role.png"}
            />
            {match.homeTeam.name}
          </span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-base sm:text-xl font-medium text-gray-100">
              {match.homeScore}
            </span>
            <span className="text-gray-400">:</span>
            <span className="text-base sm:text-xl font-medium text-gray-100">
              {match.awayScore}
            </span>
          </div>
          <p
            className={`text-sm ${statusBgColor}  sm:min-w-[92px] sm:px-3 px-2 sm:py-1.5 py-1 text-white  rounded mt-1 font-medium text-xs`}
          >
            {match.status}
          </p>
        </div>
        <div className="text-left">
          <span className="font-semibold text-gray-100 flex flex-wrap items-center gap-1 sm:gap-2.5 text-sm sm:text-[16px]">
            {match.awayTeam.name}
            <Image
              width={30}
              height={30}
              alt="avatar"
              src={"/illustrations_role.png"}
            />
            {isExpanded ? (
              <ArrowUp className="hidden sm:block" />
            ) : (
              <ArrowDown className="hidden sm:block" />
            )}
          </span>
        </div>
      </div>
      <div className="sm:hidden flex justify-center">
        {isExpanded ? <ArrowUp className="h-7 pt-0.5 sm:hidden" /> : <ArrowDown className="h-7 pt-0.5 sm:hidden" />}
      </div>
      {isExpanded && <MatchDetails match={match} />}
    </div>
  );
}
/**
 * 
         
 */
