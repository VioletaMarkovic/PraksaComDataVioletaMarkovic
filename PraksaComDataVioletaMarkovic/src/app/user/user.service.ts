import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersDataResponse } from '../models/user-data-response.model';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  getUsers(): Observable<UsersDataResponse> {
    return this.http.get<UsersDataResponse>(`${this.apiUrl}/users/`);
  }

  addUsers(user: User): Observable<UsersDataResponse> {
    return this.http.post<UsersDataResponse>(`${this.apiUrl}/users/`, user);
  }
}
