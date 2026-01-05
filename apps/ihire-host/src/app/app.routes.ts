import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule('ihire-dashboard', './routes').then((m) => m.routes),
  },
  {
    path: 'requisitions',
    loadChildren: () => loadRemoteModule('ihire-requisition', './routes').then((m) => m.routes),
  },
  {
    path: 'interviews',
    loadChildren: () => loadRemoteModule('ihire-interview', './routes').then((m) => m.routes),
  },
  {
    path: 'talent',
    loadChildren: () => loadRemoteModule('ihire-talent', './routes').then((m) => m.routes),
  },
  {
    path: 'audit',
    loadChildren: () => loadRemoteModule('ihire-audit', './routes').then((m) => m.routes),
  },
  {
    path: 'reports',
    loadChildren: () => loadRemoteModule('ihire-report', './routes').then((m) => m.routes),
  },
  {
    path: 'onboarding',
    loadChildren: () => loadRemoteModule('ihire-onboarding', './routes').then((m) => m.routes),
  },
  {
    path: 'assessment',
    loadChildren: () => loadRemoteModule('ihire-assessment', './routes').then((m) => m.routes),
  },
  {
    path: 'users',
    loadChildren: () => loadRemoteModule('ihire-user', './routes').then((m) => m.routes),
  },
];
