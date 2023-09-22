import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartAcompaniamientoComponent } from './bar-chart-acompaniamiento.component';

describe('BarChartAcompaniamientoComponent', () => {
  let component: BarChartAcompaniamientoComponent;
  let fixture: ComponentFixture<BarChartAcompaniamientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarChartAcompaniamientoComponent]
    });
    fixture = TestBed.createComponent(BarChartAcompaniamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
