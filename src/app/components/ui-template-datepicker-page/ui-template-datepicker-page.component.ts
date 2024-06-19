import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-ui-template-datepicker-page',
  standalone: true,
  styleUrl: './ui-template-datepicker-page.component.scss',
  templateUrl: './ui-template-datepicker-page.component.html',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
})
export class UiTemplateDatepickerPageComponent {
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
  private readonly _currentYear = new Date().getFullYear();
  readonly minDate = new Date(this._currentYear - 20, 0, 1);
  readonly maxDate = new Date(this._currentYear + 1, 11, 31);
  readonly date = new FormControl<Date | null>(null);
}
