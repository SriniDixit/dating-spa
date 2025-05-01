import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-login',
  standalone: true, // Ensure standalone is true if not using modules
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {}
  private loginService = inject(LoginService);
  private globalDataService = inject(GlobalDataService);

  login() {
    this.loginService.login(this.model).subscribe({
      next: response => {
        console.log('Login successful:', response);
        this.globalDataService.SetIsLoggedIn(true); // Set logged in status
        // You might want to navigate away or store user data/token here too
      },
      error: error => {
        console.error('Login failed:', error);
        this.globalDataService.SetIsLoggedIn(false); // Explicitly set to false on error
      }
    });
  }
}
