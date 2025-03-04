export interface Player {
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export type MatchStatus = "Scheduled" | "Ongoing" | "Finished";
export type AllMatchStatus = MatchStatus | "all";
export interface Event {
  type: string;
  team: "home" | "away";
  player: string;
  time: string;
}

export interface Match {
  id?: string; 
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
  events?: Event[];
}

export interface ApiResponse {
  ok: boolean;
  data: { matches: Match[] };
}
