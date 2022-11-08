import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentEmployeeRoutingModule } from './department-employee-routing.module';
import { DepartmentEmployeeListComponent } from './department-employee-list/department-employee-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [DepartmentEmployeeListComponent],
  imports: [
    CommonModule,
    DepartmentEmployeeRoutingModule,
    SharedModule
  ]
})
export class DepartmentEmployeeModule { }
