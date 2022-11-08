import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentEmployeeRoutingModule } from './department-employee-routing.module';
import { DepartmentEmployeeListComponent } from './department-employee-list/department-employee-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { DepartmentEmployeeFormComponent } from './department-employee-form/department-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DepartmentEmployeeListComponent,
    DepartmentEmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    DepartmentEmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DepartmentEmployeeModule {}
