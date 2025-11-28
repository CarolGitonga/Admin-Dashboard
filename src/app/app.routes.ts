import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UsersListComponent } from './features/users/users-list/users-list.component';
import { UserDetailsComponent } from './features/users/user-details/user-details.component';
import { CreateUserComponent } from './features/users/create-user/create-user.component';
import { EditUserComponent } from './features/users/edit-user/edit-user.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'users/create', component: CreateUserComponent },
    { path: 'users/:id/edit', component: EditUserComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    

    
    // wildcard for unknown routes
    { path: '**', redirectTo: 'dashboard' },
];
