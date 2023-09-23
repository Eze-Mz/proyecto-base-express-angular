import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { IAcompaniamiento, IEdad, IProcedencia, ISexo } from 'src/app/models/answers';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private api: ApiService) { 
  }
  getAnswersByType(type: string): 
  Observable<IProcedencia[] | IAcompaniamiento[] | ISexo[] | IEdad[]> {
    return this.api.get(`answer/${type}`);
  }

  surveyCount(): Observable<number> {
    return this.api.get('survey/count');
  }
}
