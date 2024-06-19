import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'ui-ui-template-button-toggle-page',
  standalone: true,
  styleUrl: './ui-template-button-toggle-page.component.scss',
  templateUrl: './ui-template-button-toggle-page.component.html',
  imports: [ReactiveFormsModule, MatButtonToggleModule],
})
export class UiTemplateButtonTogglePageComponent {
  toggledButton = new FormControl<string>('one');
}
