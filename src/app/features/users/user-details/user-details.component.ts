import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  user!: User;
  loading = true;
  error = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.user = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
  goBack() {
    this.router.navigate(['/users']);
  }
}
