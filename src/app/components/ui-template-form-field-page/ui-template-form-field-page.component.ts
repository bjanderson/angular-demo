import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'ui-ui-template-form-field-page',
  standalone: true,
  styleUrl: './ui-template-form-field-page.component.scss',
  templateUrl: './ui-template-form-field-page.component.html',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class UiTemplateFormFieldPageComponent {}
