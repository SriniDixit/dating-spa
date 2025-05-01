import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GlobalDataService } from '../global-data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const globalDataService = inject(GlobalDataService);
  return globalDataService.GetIsLoggedIn();
};
