import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppUser } from '../models/entities/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);

  getUsers() {
    return this.httpClient.get<AppUser[]>("https://localhost:7068/api/AppUser");
  }
}
