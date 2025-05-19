import { Component, input, output } from "@angular/core";
import { PlayerModel } from "@features/team/models";

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

  onSelectPlayer(player: PlayerModel): void {
    this.selectedPlayer.emit(player);
  }

  isSelected(player: PlayerModel): boolean {
    return this.selectedPlayers().includes(player);
  }
}
