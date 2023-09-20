import { TestBed } from '@angular/core/testing';

import { InsertTokenInterceptor } from './insert-token.interceptor';

describe('InsertTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InsertTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InsertTokenInterceptor = TestBed.inject(InsertTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
