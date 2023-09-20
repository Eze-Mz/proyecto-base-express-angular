import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { IProcedencia } from 'src/app/models/answers';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private api: ApiService) { 
  }
  getAnswersByType(type: string): Observable<IProcedencia[]> {
    return this.api.get(`answer/${type}`);
  }
}