import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'ui-ui-template-radio-button-page',
  standalone: true,
  styleUrl: './ui-template-radio-button-page.component.scss',
  templateUrl: './ui-template-radio-button-page.component.html',
  imports: [ReactiveFormsModule, MatRadioModule],
})
export class UiTemplateRadioButtonPageComponent {
  favoriteSeason = new FormControl<string>('');
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
