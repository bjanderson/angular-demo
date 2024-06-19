import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-ui-template-input-page',
  standalone: true,
  styleUrl: './ui-template-input-page.component.scss',
  templateUrl: './ui-template-input-page.component.html',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class UiTemplateInputPageComponent {
  inputCtrl = new FormControl<string>('Clear me');
}
