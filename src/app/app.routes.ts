import { Routes } from '@angular/router';

import { Admin }  from './pages/admin/admin';
import { Estrenos } from './pages/estrenos/estrenos';
import { Proximos } from './pages/proximos/proximos';

export const routes: Routes = [
    {
        path: '',
        component: Estrenos
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'proximos',
        component: Proximos
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
