import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudConductoresComponent } from './crud-conductores.component';

describe('CrudConductoresComponent', () => {
  let component: CrudConductoresComponent;
  let fixture: ComponentFixture<CrudConductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudConductoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
