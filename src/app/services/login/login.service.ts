import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);
  // Base URL for your API. Adjust if needed.
  private baseUrl = 'https://localhost:7068/api/';

  constructor() { }

  /**
   * Sends login credentials to the API.
   * @param model An object containing login credentials (e.g., {username: string, password: string}). The exact structure depends on your API.
   * @returns An Observable containing the API response (e.g., user info or token).
   */
  login(model: any): Observable<any> {
    // Make sure 'account/login' is the correct endpoint path from your Swagger documentation.
    return this.http.post(this.baseUrl + 'login', model);
  }
}
