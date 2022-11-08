import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListComponent } from './business-list/business-list.component';

const routes: Routes = [
  {
    path: 'bussiness',
    children: [
      {
        path: 'list',
        component: BusinessListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
