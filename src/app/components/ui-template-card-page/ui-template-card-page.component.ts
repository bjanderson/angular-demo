import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'ui-ui-template-card-page',
  standalone: true,
  styleUrl: './ui-template-card-page.component.scss',
  templateUrl: './ui-template-card-page.component.html',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatProgressBarModule],
})
export class UiTemplateCardPageComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
