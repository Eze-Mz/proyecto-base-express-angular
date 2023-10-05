import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/models/register-user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'http://localhost/api/register';

  constructor(private http: HttpClient) { }

  register(registerUser: RegisterUser): Observable<any> {
    return this.http.post(this.baseUrl, registerUser);
  }

  setToken(data: any) {
    localStorage.setItem('token', data.token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
