import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppChildRoutingModule } from './app-child-routing.module';
import { SharedModule } from './Shared/shared.module';

const MODULES = [
  AppChildRoutingModule,
  SharedModule,
  CommonModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ]
})
export class AppChildModule { }
