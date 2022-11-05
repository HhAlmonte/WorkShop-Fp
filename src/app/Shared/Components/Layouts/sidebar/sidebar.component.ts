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
    {name: 'Bussiness', route: '/bussiness', icon: 'work'},
    {name: 'Department', route: '/departments', icon: 'dashboard'},
    {name: 'Department Employees', route: '/departments-employees', icon: 'group_work'},
    {name: 'Offices', route: '/offices', icon: 'store_mall_directory'},
    {name: 'Address', route: '/address', icon: 'place'},
    {name: 'Cost Center', route: '/cost-center', icon: 'group_work'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto(path: string) {
    this.router.navigate([path]);
  }
}
