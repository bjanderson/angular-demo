import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';

export const DEFAULT_DIALOG_OPTIONS: MatDialogConfig = {
  ariaDescribedBy: '',
  ariaLabel: '',
  ariaLabelledBy: '',
  ariaModal: true,
  autoFocus: false,
  backdropClass: [],
  closeOnNavigation: true,
  delayFocusTrap: false,
  direction: 'ltr',
  disableClose: false,
  enterAnimationDuration: 100,
  exitAnimationDuration: 100,
  hasBackdrop: true,
};

export const matDialogConfigProvider = {
  provide: MAT_DIALOG_DEFAULT_OPTIONS,
  useValue: DEFAULT_DIALOG_OPTIONS,
};
