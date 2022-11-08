import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTokenInterceptor } from './Core/Helpers/add-token.interceptor';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-child.module').then((m) => m.AppChildModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true,
    },
  ],
})
export class AppRoutingModule {}
