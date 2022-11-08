import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDto } from 'src/app/Core/Models/Dtos/employeeDto.models';
import { EmployeeService } from 'src/app/Core/Services/employee.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  public employees: EmployeeDto[] = [];
  public employee!: EmployeeDto;

  constructor(
    private _employeeService: EmployeeService,
    private dialog: MatDialog,
    private sweetAlertService: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees() {
    this._employeeService.gets().subscribe(({ data }: any) => {
      this.employees = data;
    });
  }

  public deleteEmployee(id: string) {
    this.sweetAlertService
      .opensweetalertdelete('¿Estas seguro de eliminar este empleado?')
      .subscribe((result) => {
        if (result) {
          this._employeeService.delete(id).subscribe(() => {
            this.sweetAlertService.opensweetalertsuccess('Empleado eliminado');
            this.getEmployees();
          });
        }
      });
  }

  public editEmployee(employee: EmployeeDto) {
    this.dialog.open(EmployeeFormComponent, {
      data: employee,
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.getEmployees();
    });
  }

  public openDialog() {
    this.dialog.open(EmployeeFormComponent);

    this.dialog.afterAllClosed.subscribe(() => {
      this.getEmployees();
    });
  }
}
