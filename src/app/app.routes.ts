import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UsersListComponent } from './features/users/users-list/users-list.component';
import { UserDetailsComponent } from './features/users/user-details/user-details.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    // wildcard for unknown routes
    { path: '**', redirectTo: 'dashboard' },
];
