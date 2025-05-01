import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { authGuard } from './services/auth/auth.guard';

export const routes: Routes = [
    {path:'userlist', component:UsersComponent, canActivate:[authGuard],}
];
