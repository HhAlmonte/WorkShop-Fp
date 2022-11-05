import { NgModule } from '@angular/core';
// Modules
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { SidebarComponent } from './Layouts/sidebar/sidebar.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { PageComponent } from './Template/page/page.component';

const COMPONENTS = [
  NavbarComponent,
  SidebarComponent,
  PageComponent
]

const MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  CommonModule,
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
