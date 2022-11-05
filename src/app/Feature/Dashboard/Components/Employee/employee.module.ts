import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
