import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioTuristasComponent } from './cuestionario-turistas.component';

describe('CuestionarioTuristasComponent', () => {
  let component: CuestionarioTuristasComponent;
  let fixture: ComponentFixture<CuestionarioTuristasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuestionarioTuristasComponent]
    });
    fixture = TestBed.createComponent(CuestionarioTuristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
