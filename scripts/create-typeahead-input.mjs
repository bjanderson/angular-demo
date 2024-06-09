import { config, parseTemplate } from './config.mjs';
import { createDirectoryIfNotExists, writeFile } from './file-io.mjs';

const parentFolder = 'src/app/components';
const folder = `${parentFolder}/${config.kabab}-input`;
createDirectoryIfNotExists(folder);

const tsTemplate = `import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, WritableSignal, effect } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PascalCase } from '@bjanderson/moneytool-shared';
import { isNullOrEmpty } from '@bjanderson/utils';
import { BehaviorSubject, startWith, tap } from 'rxjs';
import { PascalCaseService } from 'src/app/services';

@Component({
  selector: 'ui-kabab-case-input',
  standalone: true,
  styleUrl: './kabab-case-input.component.scss',
  templateUrl: './kabab-case-input.component.html',
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
})
export class PascalCaseInputComponent {
  filterControl: FormControl<string>;
  options: WritableSignal<PascalCase[]>;
  filteredOptions: BehaviorSubject<PascalCase[]>;

  private _value: any;
  @Output() valueChange: EventEmitter<any>;
  @Input() get value(): any {
    return this._value;
  }
  set value(value: any) {
    if (this._value !== value) {
      this.valueChange.emit(value);
    }
    this._value = value;
  }

  constructor(private camelCaseService: PascalCaseService) {
    this.valueChange = new EventEmitter<any>();
    this.filterControl = new FormControl<string>('');
    this.options = this.camelCaseService.models;
    this.filteredOptions = new BehaviorSubject<AccountProvider[]>([]);
    this.filterControl.valueChanges.pipe(
      startWith(''),
      tap((value) => {
        this.filteredOptions.next(this.filter(value || ''));
      }),
    );

    effect(() => {
      this.filteredOptions.next([...this.options()]);
    });
  }

  private filter(value: string): PascalCase[] {
    if (typeof value !== 'string') {
      this.value = value;
      return [value];
    }

    if (isNullOrEmpty(value)) {
      return [...this.options()];
    }

    const filterValue = value.toLowerCase();
    return this.options()?.filter((option) => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(value: PascalCase): string {
    return value?.name;
  }
}
`;

const tsFileName = parseTemplate(`${folder}/kabab-case-input.component.ts`);
const tsTxt = parseTemplate(tsTemplate);
writeFile(tsFileName, tsTxt);

const specTemplate = `import { signal } from '@angular/core';
import { PascalCaseInputComponent } from './kabab-case-input.component';

const camelCaseService: any = {
  models: signal([]),
};

let component: any;
function init(): void {
  component = new PascalCaseInputComponent(camelCaseService);
}

describe('PascalCaseInputComponent', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('should construct', () => {
      expect(component).toBeDefined();
    });
  });
});
`;

const specFileName = parseTemplate(`${folder}/kabab-case-input.component.spec.ts`);
const specTxt = parseTemplate(specTemplate);
writeFile(specFileName, specTxt);

const htmlTemplate = `<div class="row flex1">
  <mat-form-field class="flex1">
    <mat-label>Title Case</mat-label>

    <input
      type="text"
      aria-label="Title Case"
      matInput
      [formControl]="filterControl"
      [matAutocomplete]="auto"
    />

    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
      @for (option of filteredOptions | async; track option.id) {
      <mat-option [value]="option">{{ option.name }}</mat-option>
      }
    </mat-autocomplete>
  </mat-form-field>
</div>
`;

const htmlFileName = parseTemplate(`${folder}/kabab-case-input.component.html`);
const htmlTxt = parseTemplate(htmlTemplate);
writeFile(htmlFileName, htmlTxt);

const scssTemplate = `:host {
  flex: 1;
}
`;

const scssFileName = parseTemplate(`${folder}/kabab-case-input.component.scss`);
const scssTxt = parseTemplate(scssTemplate);
writeFile(scssFileName, scssTxt);

const indexTemplate = `export * from './kabab-case-input.component'`;
const indexFileName = parseTemplate(`${folder}/index.ts`);
const indexTxt = parseTemplate(indexTemplate);
writeFile(indexFileName, indexTxt);
