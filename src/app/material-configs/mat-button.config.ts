import { MAT_BUTTON_CONFIG, MatButtonConfig } from '@angular/material/button';

const DEFAULT_BUTTON_OPTIONS: MatButtonConfig = {
  disabledInteractive: true,
};

export const matButtonConfigProvider = {
  provide: MAT_BUTTON_CONFIG,
  useValue: DEFAULT_BUTTON_OPTIONS,
};
