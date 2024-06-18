import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'ui-ui-template-badge-page',
  standalone: true,
  styleUrl: './ui-template-badge-page.component.scss',
  templateUrl: './ui-template-badge-page.component.html',
  imports: [MatBadgeModule],
})
export class UiTemplateBadgePageComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
