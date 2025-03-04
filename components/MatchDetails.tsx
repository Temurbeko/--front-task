import { Match } from "@/lib/types";
import Image from "next/image";

interface MatchDetailsProps {
  match: Match;
}

export default function MatchDetails({ match }: MatchDetailsProps) {
  return (
    <div className="mt-4 border-t border-gray-700 pt-4">
      <div></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
        <div>
          <div className="flex flex-wrap gap-1.5">
            <div className="flex w-full gap-1.5">
              {match.homeTeam.players.map((player) => (
                <div
                  key={player.username}
                  className="flex flex-wrap flex-1 justify-between items-center bg-[#101318] p-2 sm:p-3 rounded-[4px]"
                >
                  <span className="flex items-center gap-1.5">
                    <img
                      className="size-5 sm:size-8"
                      alt="avatar"
                      src={"/avatar_global.png"}
                    />
                    {player.username}
                  </span>
                  <span className="text-gray-500">Убийств:</span>
                  <span>{player.kills}</span>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-3 justify-between items-center bg-[#101318] p-2 sm:p-3.5 rounded-[4px]">
              <div>
                <span className="text-gray-500">Points:</span>
                <span> {match.homeTeam.points}</span>
              </div>
              <div>
                <span className="text-gray-500">Место:</span>
                <span> {match.homeTeam.place}</span>
              </div>
              <div>
                <span className="text-gray-500">Всего убийств:</span>
                <span> {match.homeTeam.total_kills}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5">
            <div className="flex w-full gap-1.5">
              {match.awayTeam.players.map((player) => (
                <div
                  key={player.username}
                  className="flex flex-wrap flex-1 justify-between items-center bg-[#101318] p-2 sm:p-3 rounded-[4px]"
                >
                  <span className="flex items-center gap-1.5">
                    <Image
                      width={30}
                      height={30}
                      alt="avatar"
                      src={"/avatar_global.png"}
                    />
                    {player.username}
                  </span>
                  <span className="text-gray-500">Убийств:</span>
                  <span>{player.kills}</span>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-3 justify-between items-center bg-[#101318] p-2 sm:p-3.5 rounded-[4px]">
              <div>
                <span className="text-gray-500">Points:</span>
                <span> {match.awayTeam.points}</span>
              </div>
              <div>
                <span className="text-gray-500">Место:</span>
                <span> {match.awayTeam.place}</span>
              </div>
              <div>
                <span className="text-gray-500">Всего убийств:</span>
                <span> {match.awayTeam.total_kills}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
