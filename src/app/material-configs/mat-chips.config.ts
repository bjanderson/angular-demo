import { MAT_CHIPS_DEFAULT_OPTIONS, MatChipsDefaultOptions } from '@angular/material/chips';

export const DEFAULT_CHIPS_OPTIONS: MatChipsDefaultOptions = {
  hideSingleSelectionIndicator: true,
  separatorKeyCodes: [],
};

export const matChipsConfigProvider = {
  provide: MAT_CHIPS_DEFAULT_OPTIONS,
  useValue: DEFAULT_CHIPS_OPTIONS,
};
