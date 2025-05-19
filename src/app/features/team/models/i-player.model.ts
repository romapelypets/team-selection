import { PlayerRoleEnum } from "@features/team/enums";

export interface PlayerModel {
  name: string;
  type: PlayerRoleEnum;
  battingSkill: number;
  bowlingSkill: number;
  fieldingSkill: number;
}
