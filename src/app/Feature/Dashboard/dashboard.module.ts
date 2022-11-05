import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './Components/Home/home.component';
import { UserModule } from './Components/User/user.module';
import { EmployeeModule } from './Components/Employee/employee.module';

const MODULES = [SharedModule, UserModule, EmployeeModule];
const COMPONENTS = [DashboardComponent, HomeComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [DashboardRoutingModule, ...MODULES],
})
export class DashboardModule {}
