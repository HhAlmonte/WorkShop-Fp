import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/Helpers/auth.guard';
import { DashboardComponent } from './Feature/Dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [
      AuthGuard
    ],
    component: DashboardComponent,
    loadChildren: () =>
      import('./Feature/Dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Feature/Auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppChildRoutingModule {}
