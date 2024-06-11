import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./components/home-page').then((c) => c.HomePageComponent),
  },

  {
    path: 'ui-template',
    // loadComponent: () =>
    //   import('./components/ui-template-page').then((c) => c.UiTemplatePageComponent),
    children: [
      {
        path: 'colors',
        loadComponent: () =>
          import('./components/ui-template-colors-page').then(
            (c) => c.UiTemplateColorsPageComponent,
          ),
      },

      {
        path: 'typography',
        loadComponent: () =>
          import('./components/ui-template-typography-page').then(
            (c) => c.UiTemplateTypographyPageComponent,
          ),
      },

      {
        path: 'autocomplete',
        loadComponent: () =>
          import('./components/ui-template-autocomplete-page').then(
            (c) => c.UiTemplateAutocompletePageComponent,
          ),
      },

      {
        path: 'buttons',
        loadComponent: () =>
          import('./components/ui-template-buttons-page').then(
            (c) => c.UiTemplateButtonsPageComponent,
          ),
      },
    ],
  },
];
