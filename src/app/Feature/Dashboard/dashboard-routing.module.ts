import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/User/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/Employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/Business/business.module').then(
        (m) => m.BusinessModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/Department/department.module').then(
        (m) => m.DepartmentModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import(
        './Components/Department-employee/department-employee.module'
      ).then((m) => m.DepartmentEmployeeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/Office/office.module').then((m) => m.OfficeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/Address/address.module').then((m) => m.AddressModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Components/Cost-center/cost-center.module').then((m) => m.CostCenterModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
