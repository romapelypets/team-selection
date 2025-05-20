import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ModalOverlayService } from "@features/overlay/services";
import { HeaderComponent } from "@layout-components/header";
import { WelcomeInstructionsComponent } from "@layout-components/welcome-instructions";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="py-8 bg-gray-200">
      <div class="layout-container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  modalOverlayService = inject(ModalOverlayService);

  ngOnInit(): void {
    this.modalOverlayService.openModal(WelcomeInstructionsComponent);
  }
}
