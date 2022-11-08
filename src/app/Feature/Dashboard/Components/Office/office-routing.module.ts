import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeListComponent } from './office-list/office-list.component';

const routes: Routes = [{
  path: 'office',
  children: [
    {
      path: 'list',
      component: OfficeListComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
