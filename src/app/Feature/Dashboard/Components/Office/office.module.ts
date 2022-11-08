import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeListComponent } from './office-list/office-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { OfficeFormComponent } from './office-form/office-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OfficeListComponent,
    OfficeFormComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OfficeModule { }
