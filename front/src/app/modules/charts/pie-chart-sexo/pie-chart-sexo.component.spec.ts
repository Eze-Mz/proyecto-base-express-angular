import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartSexoComponent } from './pie-chart-sexo.component';

describe('PieChartSexoComponent', () => {
  let component: PieChartSexoComponent;
  let fixture: ComponentFixture<PieChartSexoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartSexoComponent]
    });
    fixture = TestBed.createComponent(PieChartSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
