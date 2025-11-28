import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users-list',
  imports: [NgFor, NgIf],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit {
  users: User[] = [];
  loading = true;
  error = false;

  constructor(private router: Router, private userService: UserService) {}
  ngOnInit(){
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  onCreateUser() {
    this.router.navigate(['/users/create']);
    
  }
  onView(id: number) {
    console.log('View user', id);
    this.router.navigate(['/users', id]);
  }
  onEdit(id: number) {
    console.log('Edit user', id);
    this.router.navigate(['/users', id, 'edit']);
  }
   onDelete(id: number) {
    console.log('Delete user', id);
    // later: call service to delete
  }

}
