import { Component, inject } from "@angular/core";

import { PlayerModel } from "@features/team/models";
import { TeamSelectionService } from "@features/team/services";
import { ModalOverlayService } from "@features/overlay/services";
import { PlayersListComponent } from "@team-selection/components/players-list";
import { SelectedPlayersComponent } from "@team-selection/components//selected-players";
import { PlayerDetailOverlayComponent } from "@team-selection/components/player-detail-overlay";

@Component({
  selector: "app-team-selection-container",
  imports: [PlayersListComponent, SelectedPlayersComponent, PlayerDetailOverlayComponent],
  templateUrl: "./team-selection-container.component.html",
  styleUrl: "./team-selection-container.component.scss",
})
export class TeamSelectionContainerComponent {
  teamService = inject(TeamSelectionService);
  modalOverlayService = inject(ModalOverlayService);
  availablePlayers = this.teamService.availablePlayers;
  selectedPlayers = this.teamService.selectedPlayers;

  onSelectPlayer(player: PlayerModel): void {
    this.teamService.selectPlayer(player);
  }

  onRemovePlayer(id: string): void {
    this.teamService.removePlayer(id);
  }

  onPlayerRowClick(player: PlayerModel): void {
    this.modalOverlayService.openModal(PlayerDetailOverlayComponent, player);
  }
}
