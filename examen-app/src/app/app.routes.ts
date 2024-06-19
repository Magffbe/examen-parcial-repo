import { Routes } from '@angular/router';
import { PostFirestorePage } from '../app/post-firestore/post-firestore.page';
import { PostApiPage } from './post-api/post-api.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [

  { 
    path: '', 
    redirectTo: 'PostfirestorePage', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'post-firestore',
    loadComponent: () => import('../app/post-firestore/post-firestore.page').then( m => m.PostFirestorePage)
  },
  {
    path: 'post-api',
    loadComponent: () => import('./post-api/post-api.page').then( m => m.PostApiPage)
  },
];
