import { MAT_ICON_DEFAULT_OPTIONS, MatIconDefaultOptions } from '@angular/material/icon';

const DEFAULT_ICON_OPTIONS: MatIconDefaultOptions = {
  fontSet: 'fas',
};

export const matIconConfigProvider = {
  provide: MAT_ICON_DEFAULT_OPTIONS,
  useValue: DEFAULT_ICON_OPTIONS,
};
