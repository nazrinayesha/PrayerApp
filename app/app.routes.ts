import { Routes } from '@angular/router';
import { HomePage } from  './pages/tabs/home/home.page';
import { MorningPage } from './pages/tabs/morning/morning.page';
import { EveningPage } from './pages/tabs/evening/evening.page';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  { path: 'home', component: HomePage },
  { path: 'morning', component: MorningPage },
  { path: 'evening', component: EveningPage },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
];
