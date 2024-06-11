import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith } from 'rxjs';

export interface User {
  name: string;
}

@Component({
  selector: 'ui-ui-template-autocomplete-page',
  standalone: true,
  styleUrl: './ui-template-autocomplete-page.component.scss',
  templateUrl: './ui-template-autocomplete-page.component.html',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class UiTemplateAutocompletePageComponent {
  filteredOptions: Observable<User[]>;
  myControl: FormControl<string | User>;
  options: User[];

  constructor() {
    this.myControl = new FormControl<string | User>('');
    this.options = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this.filter(`${name}`) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user?.name || '';
  }

  private filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
