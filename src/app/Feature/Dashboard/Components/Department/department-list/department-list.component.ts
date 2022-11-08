import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from 'src/app/Core/Models/Dtos/DeparmentDto.models';
import { DeparmentService } from 'src/app/Core/Services/deparment.service';
import { EmployeeService } from 'src/app/Core/Services/employee.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
})
export class DepartmentListComponent implements OnInit {
  public departments: DepartmentDto[] = [];
  public department!: DepartmentDto;
  public employessNames: string[] = [];
  public open: boolean = false;

  constructor(
    private _departmentService: DeparmentService,
    private sweetalertService: SweetAlertService,
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  public getDepartments(): void {
    this._departmentService.gets().subscribe(({ data }: any) => {
      this.departments = data;
    });
  }

  public deleteDepartment(id: string): void {
    this.sweetalertService
      .opensweetalertdelete('¿Estas seguro de eliminar este departamento?')
      .subscribe((result) => {
        if (result) {
          this._departmentService.delete(id).subscribe(() => {
            this.sweetalertService.opensweetalertsuccess(
              'Departamento eliminado'
            );
            this.getDepartments();
          });
        }
      });
  }
}
