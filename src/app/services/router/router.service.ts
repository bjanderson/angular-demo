import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  goToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  goToAccountPage(accountId: string): void {
    this.goToUrl(`/accounts/${accountId}`);
  }
}
