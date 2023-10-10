import { Injectable } from '@angular/core';
import { ApiService } from '../http/api.service';
import { Observable } from 'rxjs';
import { IAcompaniamiento, IEdad, IProcedencia, ISexo } from 'src/app/models/answers';
import { Survey } from 'src/app/models/survey';

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

  getAllSurveys(): Observable<any> {
    return this.api.get('survey');
  }

  createSurvey(survey: Survey): Observable<any> {
    return this.api.post('survey', survey);
  }
}
