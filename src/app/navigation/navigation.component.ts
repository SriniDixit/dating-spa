import { Component, inject } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';
import { AccountComponent } from "../account/account.component";

@Component({
  selector: 'app-navigation',
  imports: [LoginComponent, CommonModule, AccountComponent],
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  private globalDataService = inject(GlobalDataService);

  get isLoggedIn(): boolean {
    return this.globalDataService.GetIsLoggedIn();
  }

  private router = inject(Router);
  navigateToUserList(){
    this.router.navigateByUrl('/userlist');
  }
}
