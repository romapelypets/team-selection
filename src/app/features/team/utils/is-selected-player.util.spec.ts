import { PlayerRoleEnum } from "@features/team/enums";
import { PlayerModel } from "@features/team/models";

import { isSelectedPlayer } from "./is-selected-player.util";

describe("isSelectedPlayer", () => {
  const mockPlayers: PlayerModel[] = [
    {
      id: "p1",
      name: "Alex Morgan",
      type: PlayerRoleEnum.Batting,
      battingSkill: 85,
      bowlingSkill: 20,
      fieldingSkill: 75,
    },
    {
      id: "p2",
      name: "Sam Taylor",
      type: PlayerRoleEnum.Bowling,
      battingSkill: 40,
      bowlingSkill: 88,
      fieldingSkill: 70,
    },
    {
      id: "p3",
      name: "Chloe Martinez",
      type: PlayerRoleEnum.WicketKeeper,
      battingSkill: 60,
      bowlingSkill: 10,
      fieldingSkill: 85,
    },
  ];

  it("should return true if player ID exists in the selected players list", () => {
    const result = isSelectedPlayer("p1", mockPlayers);
    expect(result).toBe(true);
  });

  it("should return false if player ID does not exist in the selected players list", () => {
    const result = isSelectedPlayer("p99", mockPlayers);
    expect(result).toBe(false);
  });

  it("should return false if the selected players list is empty", () => {
    const result = isSelectedPlayer("p1", []);
    expect(result).toBe(false);
  });

  it("should be case-sensitive when comparing IDs", () => {
    const result = isSelectedPlayer("P1", mockPlayers);
    expect(result).toBe(false);
  });
});
