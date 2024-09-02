import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './modules/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'errors',
  //   loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  // },
  // { path: '**', redirectTo: 'errors/404' },
];
