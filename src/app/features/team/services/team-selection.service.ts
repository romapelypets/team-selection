import { Injectable, signal, computed, inject } from "@angular/core";

import { PlayerModel } from "@features/team/models";
import { PlayerRoleEnum } from "@features/team/enums";
import { PLAYERS_LIST } from "@features/team/constants";
import { isSelectedPlayer } from "@features/team/utils";
import { NotificationsService } from "@features/notifications/services";

@Injectable({
  providedIn: "root",
})
export class TeamSelectionService {
  availablePlayers = signal<PlayerModel[]>(PLAYERS_LIST);
  selectedPlayers = signal<PlayerModel[]>([]);
  notificationsService = inject(NotificationsService);

  totalCount = computed(() => this.selectedPlayers().length);

  selectPlayer(player: PlayerModel): void {
    if (this.isSelected(player.id)) return;

    const errorMessage = this.validatePlayerSelection(player);
    if (errorMessage) {
      this.notificationsService.showError(errorMessage);
      return;
    }

    this.selectedPlayers.update((list: PlayerModel[]) => [...list, player]);
  }

  removePlayer(id: string): void {
    this.selectedPlayers.update((list: PlayerModel[]) => list.filter((player: PlayerModel) => player.id !== id));
  }

  isSelected(id: string): boolean {
    return isSelectedPlayer(id, this.selectedPlayers());
  }

  private validatePlayerSelection(player: PlayerModel): string | undefined {
    const total = this.totalCount();
    const batters = this.countByType(PlayerRoleEnum.Batting)();
    const bowlers = this.countByType(PlayerRoleEnum.Bowling)();
    const keepers = this.countByType(PlayerRoleEnum.WicketKeeper)();
    const allRounders = this.countByType(PlayerRoleEnum.AllRounder)();

    if (total >= 11) {
      return "Only 11 players are allowed in a team";
    }

    switch (player.type) {
      case PlayerRoleEnum.Batting:
        if (batters >= 6) {
          return "Batsmen can not be more than 6";
        }
        if (batters + bowlers >= 6) {
          return "Batsmen and Bowlers can not be more than 6";
        }
        break;

      case PlayerRoleEnum.Bowling:
        if (bowlers >= 6) {
          return "Bowlers can not be more than 6";
        }
        if (batters + bowlers >= 6) {
          return "Batsmen and Bowlers can not be more than 6";
        }
        break;

      case PlayerRoleEnum.WicketKeeper:
        if (keepers >= 1) {
          return "Wicket Keeper can not be more than 1";
        }
        break;

      case PlayerRoleEnum.AllRounder:
        if (allRounders >= 4) {
          return "All Rounders can not be more than 4";
        }
        break;
    }

    return undefined;
  }

  private countByType = (type: PlayerRoleEnum) => {
    return computed(() => this.selectedPlayers().filter((player: PlayerModel) => player.type === type)?.length ?? 0);
  };
}
