import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Songs } from './components/songs/songs';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'songs', component: Songs },
];