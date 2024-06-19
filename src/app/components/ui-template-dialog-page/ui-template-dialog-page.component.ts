import { Component } from '@angular/core';
import { UiTemplateDialogComponent } from '../ui-template-dialog';

@Component({
  selector: 'ui-ui-template-dialog-page',
  standalone: true,
  styleUrl: './ui-template-dialog-page.component.scss',
  templateUrl: './ui-template-dialog-page.component.html',
  imports: [UiTemplateDialogComponent],
})
export class UiTemplateDialogPageComponent {}
