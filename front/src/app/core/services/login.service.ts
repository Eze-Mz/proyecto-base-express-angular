import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { LoginUser } from 'src/app/models/login-user';
import { Router } from '@angular/router';
import { UserTokenData } from 'src/app/models/user-token-data';

const TOKEN_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService, private router: Router) { }

  login(data: LoginUser) {
    return this.api.post('login', data);
  }

  //Sería bueno comprobar que el token es correcto antes de guardarlo
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) ?? '';
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public getUserTokenData(): UserTokenData {
    //The atob() function decodes a string of data which has been encoded using Base64 encoding.
    //See: https://developer.mozilla.org/en-US/docs/Web/API/atob
    const token = this.getToken();
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    const tokenData = JSON.parse(decodedPayload);
    
    return tokenData;
  }


  public logout(): void {
    window.sessionStorage.clear();
    this.router.navigateByUrl('/inicio');
    window.location.reload();
  }

}
