import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private isLoggedIn: boolean = false;

  constructor() { }

  SetIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }

  GetIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
