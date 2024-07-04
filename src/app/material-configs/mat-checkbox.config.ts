import {
  MAT_CHECKBOX_DEFAULT_OPTIONS,
  MatCheckboxDefaultOptions,
} from '@angular/material/checkbox';

const DEFAULT_CHECKBOX_OPTIONS: MatCheckboxDefaultOptions = {
  clickAction: 'check-indeterminate',
};

export const matCheckboxConfigProvider = {
  provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
  useValue: DEFAULT_CHECKBOX_OPTIONS,
};
