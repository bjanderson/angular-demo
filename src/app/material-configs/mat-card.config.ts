import { MAT_CARD_CONFIG, MatCardConfig } from '@angular/material/card';

const DEFAULT_CARD_OPTIONS: MatCardConfig = {
  appearance: 'raised',
};

export const matCardConfigProvider = {
  provide: MAT_CARD_CONFIG,
  useValue: DEFAULT_CARD_OPTIONS,
};
