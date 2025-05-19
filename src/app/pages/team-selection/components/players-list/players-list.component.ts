import { Component, input, output } from "@angular/core";
import { PlayerModel } from "@features/team/models";
import { isSelectedPlayer } from "@features/team/utils";

@Component({
  selector: "app-players-list",
  imports: [],
  templateUrl: "./players-list.component.html",
  styleUrl: "./players-list.component.scss",
})
export class PlayersListComponent {
  players = input.required<PlayerModel[]>();
  selectedPlayers = input.required<PlayerModel[]>();
  selectedPlayer = output<PlayerModel>();
  clickedPlayerRow = output<PlayerModel>();

  onSelectPlayer(event: Event, player: PlayerModel): void {
    event.stopPropagation();
    this.selectedPlayer.emit(player);
  }

  onPlayerRowClick(event: Event, player: PlayerModel): void {
    event.stopPropagation();
    this.clickedPlayerRow.emit(player);
  }

  isSelected(id: string): boolean {
    return isSelectedPlayer(id, this.selectedPlayers());
  }
}
