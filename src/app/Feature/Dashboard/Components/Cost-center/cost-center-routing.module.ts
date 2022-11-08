import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostCenterListComponent } from './cost-center-list/cost-center-list.component';

const routes: Routes = [{
  path: 'cost-center',
  children: [
    {
      path: 'list',
      component: CostCenterListComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostCenterRoutingModule { }
