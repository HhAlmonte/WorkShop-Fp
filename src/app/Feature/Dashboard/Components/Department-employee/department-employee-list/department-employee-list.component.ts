import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentEmployeeDto } from 'src/app/Core/Models/Dtos/Department-employeeDto.models';
import { DepartmentEmployeeService } from 'src/app/Core/Services/departmentEmployee.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';
import { DepartmentEmployeeFormComponent } from '../department-employee-form/department-employee-form.component';

@Component({
  selector: 'app-department-employee-list',
  templateUrl: './department-employee-list.component.html',
  styleUrls: ['./department-employee-list.component.scss'],
})
export class DepartmentEmployeeListComponent implements OnInit {
  public departments: DepartmentEmployeeDto[] = [];

  constructor(
    private _departmentEmployeeService: DepartmentEmployeeService,
    private _dialog: MatDialog,
    private sweetAlertService: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getDepartmentEmployees();
  }

  public getDepartmentEmployees() {
    this._departmentEmployeeService.gets().subscribe(({ data }: any) => {
      this.departments = data;
    });
  }

  public deleteDepartmentEmployee(id: string) {
    this.sweetAlertService
      .opensweetalertdelete('¿Estas seguro de eliminar este departamento?')
      .subscribe((result) => {
        if (result) {
          this._departmentEmployeeService.delete(id).subscribe(() => {
            this.sweetAlertService.opensweetalertsuccess(
              'Departamento eliminado'
            );
            this.getDepartmentEmployees();
          });
        }
      });
  }

  public openDialogEdit(departmentEmployee: DepartmentEmployeeDto) {
    this._dialog.open(DepartmentEmployeeFormComponent, {
      data: departmentEmployee,
    });

    this._dialog.afterAllClosed.subscribe(() => {
      this.getDepartmentEmployees();
    });
  }

  public openDialogCreate() {
    this._dialog.open(DepartmentEmployeeFormComponent);

    this._dialog.afterAllClosed.subscribe(() => {
      this.getDepartmentEmployees();
    })
  }
}
