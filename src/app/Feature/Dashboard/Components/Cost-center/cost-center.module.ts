import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterRoutingModule } from './cost-center-routing.module';
import { CostCenterListComponent } from './cost-center-list/cost-center-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CostCenterFormComponent } from './cost-center-form/cost-center-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CostCenterListComponent,
    CostCenterFormComponent
  ],
  imports: [
    CommonModule,
    CostCenterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CostCenterModule { }
