import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DatabaseService } from './database.service';
import { Observable } from 'rxjs';

export const tableDataResolver: ResolveFn<Observable<any>> = (route, state) => {
  return inject(DatabaseService).getAllSurveys();
};
