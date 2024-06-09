import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ui-ui-template-buttons-page',
  standalone: true,
  styleUrl: './ui-template-buttons-page.component.scss',
  templateUrl: './ui-template-buttons-page.component.html',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class UiTemplateButtonsPageComponent {
  toggledButton = 'one';
}
