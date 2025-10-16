import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading: WritableSignal<boolean>;

  constructor() {
    this.isLoading = signal<boolean>(false);
  }

  hideLoading(): void {
    this.isLoading.set(false);
  }

  showLoading(): void {
    this.isLoading.set(true);
  }
}
