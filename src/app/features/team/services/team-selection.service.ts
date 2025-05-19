import { Injectable, signal, computed } from "@angular/core";

import { PlayerModel } from "@features/team/models";
import { PlayerRoleEnum } from "@features/team/enums";
import { PLAYERS_LIST } from "@features/team/constants";

@Injectable({
  providedIn: "root",
})
export class TeamSelectionService {
  availablePlayers = signal<PlayerModel[]>(PLAYERS_LIST);
  selectedPlayers = signal<PlayerModel[]>([]);

  totalCount = computed(() => this.selectedPlayers().length);

  selectPlayer(player: PlayerModel): void {
    if (this.isSelected(player)) return;

    if (this.totalCount() >= 11) {
      alert("Only 11 players are allowed in a team");
      return;
    }

    switch (player.type) {
      case PlayerRoleEnum.Batting: {
        if (this.countByType(PlayerRoleEnum.Batting)() >= 6) {
          alert("Batsmen can not be more than 6");
          return;
        }
        if (this.countByType(PlayerRoleEnum.Batting)() + this.countByType(PlayerRoleEnum.Bowling)() >= 6) {
          alert("Batsmen and Bowlers can not be more that 6");
          return;
        }
        break;
      }

      case PlayerRoleEnum.Bowling: {
        if (this.countByType(PlayerRoleEnum.Bowling)() >= 6) {
          alert("Bowlers can not be more than 6");
          return;
        }
        if (this.countByType(PlayerRoleEnum.Batting)() + this.countByType(PlayerRoleEnum.Bowling)() >= 6) {
          alert("Bowlers and Bowlers can not be more that 6");
          return;
        }
        break;
      }
      case PlayerRoleEnum.WicketKeeper:
        if (this.countByType(PlayerRoleEnum.WicketKeeper)() >= 1) {
          alert("Wicket Keeper can not be more than 1");
          return;
        }
        break;
      case PlayerRoleEnum.AllRounder:
        if (this.countByType(PlayerRoleEnum.AllRounder)() >= 4) {
          alert("All Rounders can not be more than 4");
          return;
        }
        break;
    }

    this.selectedPlayers.update((list) => [...list, player]);
  }

  removePlayer(player: PlayerModel): void {
    this.selectedPlayers.update((list) => list.filter((p) => p !== player));
  }

  isSelected(player: PlayerModel): boolean {
    return this.selectedPlayers().includes(player);
  }

  private countByType = (type: PlayerRoleEnum) =>
    computed(() => this.selectedPlayers().filter((p) => p.type === type)?.length ?? 0);
}
