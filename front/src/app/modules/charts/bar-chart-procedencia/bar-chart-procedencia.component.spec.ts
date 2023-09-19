import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartProcedenciaComponent } from './bar-chart-procedencia.component';

describe('BarChartProcedenciaComponent', () => {
  let component: BarChartProcedenciaComponent;
  let fixture: ComponentFixture<BarChartProcedenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartProcedenciaComponent]
    });
    fixture = TestBed.createComponent(BarChartProcedenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
