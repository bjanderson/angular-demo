import { MAT_MENU_DEFAULT_OPTIONS, MatMenuDefaultOptions } from '@angular/material/menu';

export const DEFAULT_MENU_OPTIONS: MatMenuDefaultOptions = {
  backdropClass: '',
  hasBackdrop: true,
  overlapTrigger: false,
  overlayPanelClass: [],
  xPosition: 'after',
  yPosition: 'below',
};

export const matMenuConfigProvider = {
  provide: MAT_MENU_DEFAULT_OPTIONS,
  useValue: DEFAULT_MENU_OPTIONS,
};
