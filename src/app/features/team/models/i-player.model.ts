import { PlayerRoleEnum } from "@features/team/enums";

export interface PlayerModel {
  id: string;
  name: string;
  type: PlayerRoleEnum;
  battingSkill: number;
  bowlingSkill: number;
  fieldingSkill: number;
}
