import { Component, OnInit } from '@angular/core';
import { DepartmentEmployeeDto } from 'src/app/Core/Models/Dtos/Department-employeeDto.models';
import { DepartmentEmployeeService } from 'src/app/Core/Services/departmentEmployee.service';

@Component({
  selector: 'app-department-employee-list',
  templateUrl: './department-employee-list.component.html',
  styleUrls: ['./department-employee-list.component.scss']
})
export class DepartmentEmployeeListComponent implements OnInit {
  public departments: DepartmentEmployeeDto[] = [];

  constructor(private _departmentEmployeeService: DepartmentEmployeeService) { }

  ngOnInit(): void {
    this.getDepartmentEmployees();
  }

  public getDepartmentEmployees(){
    this._departmentEmployeeService.gets().subscribe(({data} : any) =>{
      this.departments = data;
    })
  }

  public deleteDepartmentEmployee(id: string){
    this._departmentEmployeeService.delete(id).subscribe(() => {
      this.getDepartmentEmployees();
    })
  }
}
