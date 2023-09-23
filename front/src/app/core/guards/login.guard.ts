import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = () => {
  const login: LoginService = inject(LoginService);
  const router: Router = inject(Router);
  return login.isLogged() || router.parseUrl('/inicio');
};
