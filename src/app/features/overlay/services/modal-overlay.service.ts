import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";
import { inject, Injectable, Injector, signal, ViewContainerRef } from "@angular/core";

import { OVERLAY_CONFIG } from "@features/overlay/constants";

@Injectable({
  providedIn: "root",
})
export class ModalOverlayService {
  overlay = inject(Overlay);

  defaultOverlayConfig = {
    hasBackdrop: true,
    panelClass: ["generic-modal__panel"],
    backdropClass: "generic-modal__backdrop",
    scrollStrategy: this.overlay.scrollStrategies.noop(),
  };
  overlayRef: OverlayRef | null = null;

  containerRef = signal<{
    viewContainerRef: ViewContainerRef;
    injector: Injector;
  } | null>(null);

  public registerCurrentContainerRef(viewContainerRef: ViewContainerRef, injector: Injector): void {
    this.containerRef.set({ viewContainerRef, injector });
  }

  public unregisterCurrentContainerRef(): void {
    this.containerRef.set(null);
  }

  public openModal<T>(
    component: ComponentType<T>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    dataProperty = "data",
  ) {
    if (this.overlayRef) {
      this.closeModal();
    }

    const containerRef = this.containerRef();
    const configs = new OverlayConfig({
      ...this.defaultOverlayConfig,
      ...OVERLAY_CONFIG,
    });
    const componentPortal = new ComponentPortal(component, containerRef?.viewContainerRef, containerRef?.injector);

    this.overlayRef = this.overlay.create(configs);
    const instance = this.overlayRef.attach(componentPortal).instance;

    if (dataProperty && data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (instance as any)[dataProperty] = signal(data);
    }
  }

  public closeModal(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
