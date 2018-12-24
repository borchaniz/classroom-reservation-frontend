import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import {AuthorsComponent} from './authors/authors.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'authors',
        component: AuthorsComponent
    }

];
