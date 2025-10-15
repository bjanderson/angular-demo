import { MAT_TABS_CONFIG, MatTabsConfig } from '@angular/material/tabs';

export const DEFAULT_TABS_OPTIONS: MatTabsConfig = {
  alignTabs: 'start',
  animationDuration: '500ms',
  contentTabIndex: 0,
  disablePagination: false,
  dynamicHeight: true,
  fitInkBarToContent: true,
  preserveContent: true,
  stretchTabs: false,
};

export const matTabsConfigProvider = {
  provide: MAT_TABS_CONFIG,
  useValue: DEFAULT_TABS_OPTIONS,
};
