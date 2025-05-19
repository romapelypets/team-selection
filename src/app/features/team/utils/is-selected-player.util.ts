import { PlayerModel } from "@features/team/models";

export const isSelectedPlayer = (id: string, selectedPlayers: PlayerModel[]): boolean =>
  selectedPlayers.some((player: PlayerModel) => player.id === id);
