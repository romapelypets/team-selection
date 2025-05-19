import { PlayerRoleEnum } from "@features/team/enums";
import { PlayerModel } from "@features/team/models";

export const PLAYERS_LIST: PlayerModel[] = [
  { name: "Alice", type: PlayerRoleEnum.Batting, battingSkill: 85, bowlingSkill: 20, fieldingSkill: 75 },
  { name: "Bob", type: PlayerRoleEnum.Bowling, battingSkill: 30, bowlingSkill: 90, fieldingSkill: 65 },
  { name: "Charlie", type: PlayerRoleEnum.AllRounder, battingSkill: 75, bowlingSkill: 70, fieldingSkill: 80 },
  { name: "David", type: PlayerRoleEnum.WicketKeeper, battingSkill: 60, bowlingSkill: 10, fieldingSkill: 85 },
  { name: "Eve", type: PlayerRoleEnum.Batting, battingSkill: 80, bowlingSkill: 25, fieldingSkill: 70 },
  { name: "Frank", type: PlayerRoleEnum.Bowling, battingSkill: 35, bowlingSkill: 85, fieldingSkill: 60 },
  { name: "Grace", type: PlayerRoleEnum.AllRounder, battingSkill: 70, bowlingSkill: 65, fieldingSkill: 75 },
  { name: "Heidi", type: PlayerRoleEnum.Batting, battingSkill: 78, bowlingSkill: 30, fieldingSkill: 72 },
  { name: "Ivan", type: PlayerRoleEnum.Bowling, battingSkill: 25, bowlingSkill: 88, fieldingSkill: 68 },
  { name: "Judy", type: PlayerRoleEnum.AllRounder, battingSkill: 68, bowlingSkill: 72, fieldingSkill: 77 },
  { name: "Karl", type: PlayerRoleEnum.Batting, battingSkill: 82, bowlingSkill: 22, fieldingSkill: 74 },
  { name: "Laura", type: PlayerRoleEnum.Bowling, battingSkill: 28, bowlingSkill: 80, fieldingSkill: 66 },
  { name: "Mallory", type: PlayerRoleEnum.AllRounder, battingSkill: 73, bowlingSkill: 68, fieldingSkill: 79 },
  { name: "Nina", type: PlayerRoleEnum.Batting, battingSkill: 76, bowlingSkill: 18, fieldingSkill: 70 },
  { name: "Oscar", type: PlayerRoleEnum.Bowling, battingSkill: 22, bowlingSkill: 82, fieldingSkill: 64 },
  { name: "Peggy", type: PlayerRoleEnum.AllRounder, battingSkill: 69, bowlingSkill: 66, fieldingSkill: 78 },
  { name: "Quentin", type: PlayerRoleEnum.Bowling, battingSkill: 33, bowlingSkill: 87, fieldingSkill: 62 },
  { name: "Ruth", type: PlayerRoleEnum.WicketKeeper, battingSkill: 58, bowlingSkill: 12, fieldingSkill: 83 },
  { name: "Steve", type: PlayerRoleEnum.Batting, battingSkill: 81, bowlingSkill: 24, fieldingSkill: 73 },
  { name: "Trudy", type: PlayerRoleEnum.AllRounder, battingSkill: 72, bowlingSkill: 69, fieldingSkill: 76 },
];
