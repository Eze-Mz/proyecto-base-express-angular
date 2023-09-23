import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const adminGuard: CanActivateFn = () => {
  const login = inject(LoginService);
  const router = inject(Router);
  const userData = login.getUserTokenData();
  return userData.role === 'ADMIN' || router.parseUrl('/dashboard');
};
