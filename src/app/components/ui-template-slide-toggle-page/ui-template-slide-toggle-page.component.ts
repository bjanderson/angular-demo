import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'ui-ui-template-slide-toggle-page',
  standalone: true,
  styleUrl: './ui-template-slide-toggle-page.component.scss',
  templateUrl: './ui-template-slide-toggle-page.component.html',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
})
export class UiTemplateSlideTogglePageComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
