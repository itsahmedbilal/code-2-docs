import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    children: [
      {
        path: 'choose-the-source',
        loadComponent: () =>
          import('./pages/home/choose-source/choose-source.component').then(
            (c) => c.ChooseSourceComponent
          ),
      },
      {
        path: 'choose-programming-language',
        loadComponent: () =>
          import('./pages/home/select-language/select-language.component').then(
            (c) => c.SelectLanguageComponent
          ),
      },
      {
        path: 'choose-the-result',
        loadComponent: () =>
          import('./pages/home/choose-result/choose-result.component').then(
            (c) => c.ChooseResultComponent
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/choose-the-source',
    pathMatch: 'full',
  },
];
