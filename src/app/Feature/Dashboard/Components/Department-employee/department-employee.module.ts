import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentEmployeeRoutingModule } from './department-employee-routing.module';
import { DepartmentEmployeeListComponent } from './department-employee-list/department-employee-list.component';


@NgModule({
  declarations: [DepartmentEmployeeListComponent],
  imports: [
    CommonModule,
    DepartmentEmployeeRoutingModule
  ]
})
export class DepartmentEmployeeModule { }
