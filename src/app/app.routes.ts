import { Routes } from '@angular/router';
import { Band } from './components/band/band';
import { Home } from './components/home/home';
import { Songs } from './components/songs/songs';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'songs', component: Songs },
  { path: 'band', component: Band },
];