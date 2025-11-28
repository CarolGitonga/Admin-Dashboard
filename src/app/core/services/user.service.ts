import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }


}
