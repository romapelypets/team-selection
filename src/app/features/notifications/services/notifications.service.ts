import { inject, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  toastrService = inject(ToastrService);

  showSuccess(message: string): void {
    this.toastrService.success(message);
  }

  showError(message: string): void {
    this.toastrService.error(message);
  }
}
