import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'post-firestore', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'post-firestore',
    loadComponent: () => import('./post-firestore/post-firestore.page').then( m => m.PostFirestorePage)
  },
  {
    path: 'post-api',
    loadComponent: () => import('./post-api/post-api.page').then( m => m.PostApiPage)
  },
];
