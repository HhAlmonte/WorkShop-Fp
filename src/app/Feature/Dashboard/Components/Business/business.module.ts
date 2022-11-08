import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessListComponent } from './business-list/business-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { BusinessFormComponent } from './business-form/business-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BusinessListComponent,
    BusinessFormComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BusinessModule { }
