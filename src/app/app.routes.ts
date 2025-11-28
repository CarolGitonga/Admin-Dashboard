import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UsersListComponent } from './features/users/users-list/users-list.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersListComponent },
    // wildcard for unknown routes
    { path: '**', redirectTo: 'dashboard' },
];
