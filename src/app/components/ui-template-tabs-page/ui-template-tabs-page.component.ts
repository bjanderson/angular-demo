import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'ui-ui-template-tabs-page',
  standalone: true,
  styleUrl: './ui-template-tabs-page.component.scss',
  templateUrl: './ui-template-tabs-page.component.html',
  imports: [MatTabsModule, MatButtonModule],
})
export class UiTemplateTabsPageComponent {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
