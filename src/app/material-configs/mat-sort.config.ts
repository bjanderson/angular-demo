import { MAT_SORT_DEFAULT_OPTIONS, MatSortDefaultOptions } from '@angular/material/sort';

export const DEFAULT_SORT_OPTIONS: MatSortDefaultOptions = {
  arrowPosition: 'after',
  disableClear: false,
};

export const matSortConfigProvider = {
  provide: MAT_SORT_DEFAULT_OPTIONS,
  useValue: DEFAULT_SORT_OPTIONS,
};
