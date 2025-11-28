import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users-list',
  imports: [NgForOf],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  mockUsers: User[] =[
    { id: 1, name: 'Alice Admin', email: 'alice@example.com' },
    { id: 2, name: 'Bob Manager', email: 'bob@example.com' },
    { id: 3, name: 'Carol User', email: 'carol@example.com' },
  ];
  constructor(private router: Router) {}

  onCreateUser() {
    // later: navigate to /users/create
    console.log('Create user clicked');
  }
  onView(id: number) {
    console.log('View user', id);
    // later: this.router.navigate(['/users', id]);
  }
  onEdit(id: number) {
    console.log('Edit user', id);
    // later: this.router.navigate(['/users', id, 'edit']);
  }
   onDelete(id: number) {
    console.log('Delete user', id);
    // later: call service to delete
  }

}
