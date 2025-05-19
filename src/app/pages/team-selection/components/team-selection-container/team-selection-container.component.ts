import { Component, inject } from "@angular/core";

import { PlayerModel } from "@features/team/models";
import { TeamSelectionService } from "@features/team/services";
import { PlayersListComponent } from "@team-selection/components/players-list";
import { SelectedPlayersComponent } from "@team-selection/components//selected-players";

@Component({
  selector: "app-team-selection-container",
  imports: [PlayersListComponent, SelectedPlayersComponent],
  templateUrl: "./team-selection-container.component.html",
  styleUrl: "./team-selection-container.component.scss",
})
export class TeamSelectionContainerComponent {
  teamService = inject(TeamSelectionService);
  availablePlayers = this.teamService.availablePlayers;
  selectedPlayers = this.teamService.selectedPlayers;

  onSelectPlayer(player: PlayerModel): void {
    this.teamService.selectPlayer(player);
  }

  onRemovePlayer(player: PlayerModel): void {
    this.teamService.removePlayer(player);
  }

  isSelectedPlayer(player: PlayerModel): boolean {
    return this.teamService.isSelected(player);
  }
}
