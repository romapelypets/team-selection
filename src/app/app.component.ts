import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "@layout-components/header";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
