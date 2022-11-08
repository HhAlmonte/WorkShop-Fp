import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostCenterRoutingModule } from './cost-center-routing.module';
import { CostCenterListComponent } from './cost-center-list/cost-center-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    CostCenterListComponent
  ],
  imports: [
    CommonModule,
    CostCenterRoutingModule,
    SharedModule
  ]
})
export class CostCenterModule { }
