import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { modules } from 'src/app/Core/Models/modules.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  modules:modules[] = [
    {name: 'Users', route: 'dashboard/user/list', icon: 'group'},
    {name: 'Employees', route: 'dashboard/employee/list', icon: 'group_work'},
    {name: 'Bussiness', route: 'dashboard/bussiness/list', icon: 'work'},
    {name: 'Department', route: 'dashboard/departments/list', icon: 'dashboard'},
    {name: 'Department Employees', route: 'dashboard/departments-employees/list', icon: 'group_work'},
    {name: 'Offices', route: 'dashboard/office/list', icon: 'store_mall_directory'},
    {name: 'Address', route: 'dashboard/address/list', icon: 'place'},
    {name: 'Cost Center', route: 'dashboard/cost-center/list', icon: 'group_work'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto(path: string) {
    this.router.navigate([path]);
  }
}
