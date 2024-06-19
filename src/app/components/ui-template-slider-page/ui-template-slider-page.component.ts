import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'ui-ui-template-slider-page',
  standalone: true,
  styleUrl: './ui-template-slider-page.component.scss',
  templateUrl: './ui-template-slider-page.component.html',
  imports: [MatSliderModule],
})
export class UiTemplateSliderPageComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
