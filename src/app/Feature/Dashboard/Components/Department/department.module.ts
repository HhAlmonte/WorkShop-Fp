import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CoreModule } from 'src/app/Core/core.module';


@NgModule({
  declarations: [
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class DepartmentModule { }
