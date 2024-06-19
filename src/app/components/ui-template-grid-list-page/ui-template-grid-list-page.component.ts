import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'ui-ui-template-grid-list-page',
  standalone: true,
  styleUrl: './ui-template-grid-list-page.component.scss',
  templateUrl: './ui-template-grid-list-page.component.html',
  imports: [MatGridListModule],
})
export class UiTemplateGridListPageComponent {}
