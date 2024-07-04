import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';

const DEFAULT_FORM_FIELD_OPTIONS: MatFormFieldDefaultOptions = {
  appearance: 'fill',
  floatLabel: 'auto',
  hideRequiredMarker: true,
  subscriptSizing: 'dynamic',
};

export const matFormFieldConfigProvider = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: DEFAULT_FORM_FIELD_OPTIONS,
};
