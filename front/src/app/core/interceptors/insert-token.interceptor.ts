import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class InsertTokenInterceptor implements HttpInterceptor {

  constructor(private login: LoginService) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
    if(!this.login.isLogged()) {
      return next.handle(request);
    }
    const token = this.login.getToken();
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(authRequest);
  }
}

export const insertTokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: InsertTokenInterceptor,
  multi: true
}
