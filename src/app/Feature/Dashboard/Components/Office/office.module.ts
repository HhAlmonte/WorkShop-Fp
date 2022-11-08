import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeListComponent } from './office-list/office-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    OfficeListComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    SharedModule
  ]
})
export class OfficeModule { }
