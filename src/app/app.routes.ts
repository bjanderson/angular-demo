import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./components/home-page').then((c) => c.HomePageComponent),
  },

  {
    path: 'ui-template',
    loadComponent: () =>
      import('./components/ui-template-page').then((c) => c.UiTemplatePageComponent),
  },

  {
    path: 'ui-template/buttons',
    loadComponent: () =>
      import('./components/ui-template-buttons-page').then((c) => c.UiTemplateButtonsPageComponent),
  },

  {
    path: 'ui-template/material-theme',
    loadComponent: () =>
      import('./components/ui-template-material-theme-page').then(
        (c) => c.UiTemplateMaterialThemePageComponent,
      ),
  },
];
