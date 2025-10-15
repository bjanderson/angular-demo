import {
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
  MatProgressSpinnerDefaultOptions,
} from '@angular/material/progress-spinner';

export const DEFAULT_PROGRESS_SPINNER_OPTIONS: MatProgressSpinnerDefaultOptions = {
  diameter: 100,
  strokeWidth: 10,
};

export const matProgressSpinnerConfigProvider = {
  provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
  useValue: DEFAULT_PROGRESS_SPINNER_OPTIONS,
};
