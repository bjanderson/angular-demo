import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ui-ui-template-buttons-page',
  standalone: true,
  styleUrl: './ui-template-buttons-page.component.scss',
  templateUrl: './ui-template-buttons-page.component.html',
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class UiTemplateButtonsPageComponent {}
