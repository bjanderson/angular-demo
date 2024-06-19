import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ui-ui-template-select-page',
  standalone: true,
  styleUrl: './ui-template-select-page.component.scss',
  templateUrl: './ui-template-select-page.component.html',
  imports: [JsonPipe, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class UiTemplateSelectPageComponent {
  selectCtrl = new FormControl<Food>(null);
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
