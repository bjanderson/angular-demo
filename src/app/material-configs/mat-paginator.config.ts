import {
  MAT_PAGINATOR_DEFAULT_OPTIONS,
  MatPaginatorDefaultOptions,
} from '@angular/material/paginator';

const DEFAULT_PAGINATOR_OPTIONS: MatPaginatorDefaultOptions = {
  formFieldAppearance: 'fill',
  hidePageSize: false,
  pageSize: 50,
  pageSizeOptions: [10, 20, 50, 100],
  showFirstLastButtons: true,
};

export const matPaginatorConfigProvider = {
  provide: MAT_PAGINATOR_DEFAULT_OPTIONS,
  useValue: DEFAULT_PAGINATOR_OPTIONS,
};
