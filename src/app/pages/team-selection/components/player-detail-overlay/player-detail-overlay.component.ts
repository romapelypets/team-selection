import { Component, inject, input } from "@angular/core";
import { ModalOverlayService } from "@features/overlay/services";
import { PlayerModel } from "@features/team/models";

@Component({
  selector: "app-player-detail-overlay",
  imports: [],
  templateUrl: "./player-detail-overlay.component.html",
  styleUrl: "./player-detail-overlay.component.scss",
})
export class PlayerDetailOverlayComponent {
  data = input.required<PlayerModel>();
  modalOverlayService = inject(ModalOverlayService);

  closeModal(): void {
    this.modalOverlayService.closeModal();
  }
}
