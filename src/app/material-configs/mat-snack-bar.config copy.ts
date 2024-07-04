import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';

const DEFAULT_SNACK_BAR_OPTIONS: MatSnackBarConfig = {};

export const matSnackBarConfigProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: DEFAULT_SNACK_BAR_OPTIONS,
};
