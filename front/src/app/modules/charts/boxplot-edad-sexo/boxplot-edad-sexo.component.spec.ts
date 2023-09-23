import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotEdadSexoComponent } from './boxplot-edad-sexo.component';

describe('BoxplotEdadSexoComponent', () => {
  let component: BoxplotEdadSexoComponent;
  let fixture: ComponentFixture<BoxplotEdadSexoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxplotEdadSexoComponent]
    });
    fixture = TestBed.createComponent(BoxplotEdadSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
