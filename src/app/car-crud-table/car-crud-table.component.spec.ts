import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCrudTableComponent } from './car-crud-table.component';

describe('CarCrudTableComponent', () => {
  let component: CarCrudTableComponent;
  let fixture: ComponentFixture<CarCrudTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarCrudTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarCrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
