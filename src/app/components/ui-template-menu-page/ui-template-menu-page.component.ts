import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'ui-ui-template-menu-page',
  standalone: true,
  styleUrl: './ui-template-menu-page.component.scss',
  templateUrl: './ui-template-menu-page.component.html',
  imports: [MatButtonModule, MatMenuModule],
})
export class UiTemplateMenuPageComponent {}
