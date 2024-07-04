import {
  MAT_PROGRESS_BAR_DEFAULT_OPTIONS,
  MatProgressBarDefaultOptions,
} from '@angular/material/progress-bar';

const DEFAULT_PROGRESS_BAR_OPTIONS: MatProgressBarDefaultOptions = {
  mode: 'indeterminate',
};

export const matProgressBarConfigProvider = {
  provide: MAT_PROGRESS_BAR_DEFAULT_OPTIONS,
  useValue: DEFAULT_PROGRESS_BAR_OPTIONS,
};
