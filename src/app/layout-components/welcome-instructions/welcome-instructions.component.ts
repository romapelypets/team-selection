import { Component, inject } from "@angular/core";
import { ModalOverlayService } from "@features/overlay/services";

@Component({
  selector: "app-welcome-instructions",
  imports: [],
  templateUrl: "./welcome-instructions.component.html",
  styleUrl: "./welcome-instructions.component.scss",
})
export class WelcomeInstructionsComponent {
  modalOverlayService = inject(ModalOverlayService);

  closeModal(): void {
    this.modalOverlayService.closeModal();
  }
}
