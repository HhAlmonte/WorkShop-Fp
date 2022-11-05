import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeListComponent } from './office-list/office-list.component';


@NgModule({
  declarations: [
    OfficeListComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ]
})
export class OfficeModule { }
