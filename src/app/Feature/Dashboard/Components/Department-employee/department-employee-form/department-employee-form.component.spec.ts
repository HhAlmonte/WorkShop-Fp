import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEmployeeFormComponent } from './department-employee-form.component';

describe('DepartmentEmployeeFormComponent', () => {
  let component: DepartmentEmployeeFormComponent;
  let fixture: ComponentFixture<DepartmentEmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEmployeeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
