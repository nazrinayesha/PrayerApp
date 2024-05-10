import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./home/home.page').then( m => m.HomePage)
            },
            {
                path: 'calendar',
                loadComponent: () => import('./calendar/calendar.page').then( m => m.CalendarPage)
            },
            {
                path: 'add',
                loadComponent: () => import('./add/add.page').then( m => m.AddPage)
            },
            {
                path: 'events',
                loadComponent: () => import('./events/events.page').then( m => m.SparklePage)
            },
            {
                path: 'profile',
                loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ],
    },
  {
    path: 'morning/:id',
    loadComponent: () => import('./morning/morning.page').then( m => m.MorningPage)
  },
  {
    path: 'evening/:id',
    loadComponent: () => import('./evening/evening.page').then( m => m.EveningPage)
  },


  
];
