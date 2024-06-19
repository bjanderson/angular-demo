import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'ui-ui-template-expansion-panel-page',
  standalone: true,
  styleUrl: './ui-template-expansion-panel-page.component.scss',
  templateUrl: './ui-template-expansion-panel-page.component.html',
  imports: [MatExpansionModule],
})
export class UiTemplateExpansionPanelPageComponent {
  readonly panelOpenState = signal(false);
}
