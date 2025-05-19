import { Component, input, output } from "@angular/core";
import { PlayerModel } from "@features/team/models";

@Component({
  selector: "app-selected-players",
  imports: [],
  templateUrl: "./selected-players.component.html",
  styleUrl: "./selected-players.component.scss",
})
export class SelectedPlayersComponent {
  players = input.required<PlayerModel[]>();
  removedPlayer = output<string>();

  onRemovePlayer(id: string): void {
    this.removedPlayer.emit(id);
  }
}
