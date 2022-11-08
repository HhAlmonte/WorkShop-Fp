import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEmployeeListComponent } from './department-employee-list/department-employee-list.component';

const routes: Routes = [{
  path: 'departments-employees',
  children: [
    {
      path: 'list',
      component: DepartmentEmployeeListComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentEmployeeRoutingModule { }
