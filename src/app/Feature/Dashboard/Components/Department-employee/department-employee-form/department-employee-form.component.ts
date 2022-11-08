import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentDto } from 'src/app/Core/Models/Dtos/DeparmentDto.models';
import { DepartmentEmployeeDto } from 'src/app/Core/Models/Dtos/Department-employeeDto.models';
import { EmployeeDto } from 'src/app/Core/Models/Dtos/employeeDto.models';
import { DeparmentService } from 'src/app/Core/Services/deparment.service';
import { EmployeeService } from 'src/app/Core/Services/employee.service';
import { DepartmentEmployeeService } from 'src/app/Core/Services/departmentEmployee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-department-employee-form',
  templateUrl: './department-employee-form.component.html',
  styleUrls: ['./department-employee-form.component.scss'],
})
export class DepartmentEmployeeFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public departments: DepartmentDto[] = [];
  public employees: EmployeeDto[] = [];

  constructor(
    private departmentService: DeparmentService,
    private employeeService: EmployeeService,
    private DepartmentEmployeeService: DepartmentEmployeeService,
    private sweetAlertService: SweetAlertService,
    private dialogRef: MatDialogRef<DepartmentEmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DepartmentEmployeeDto
  ) {}

  ngOnInit(): void {
    this.setData();
    this.getDepartments();
    this.initializaForm();
    this.getEmployees();
  }

  submit() {
    const departmentEmployee: DepartmentEmployeeDto = {
      ...this.form.value,
    } as DepartmentEmployeeDto;

    if (this.data) {
      this.update(departmentEmployee);
    } else {
      this.create(departmentEmployee);
    }
  }

  private initializaForm() {
    this.form = new FormGroup({
      departmentId: new FormControl('', [Validators.required]),
      employeeId: new FormControl('', [Validators.required]),
    });
  }

  public create(departmentEmployee: DepartmentEmployeeDto){
    this.DepartmentEmployeeService.post(departmentEmployee).subscribe(() => {
      this.sweetAlertService.opensweetalertsuccess('DepartmentEmployee created');
      this.dialogRef.close();
    });
  }

  public update(departmentEmployee: DepartmentEmployeeDto){
    let id = this.data.id;
    this.DepartmentEmployeeService.put(departmentEmployee, id).subscribe(() => {
      this.sweetAlertService.opensweetalertsuccess('DepartmentEmployee updated');
      this.dialogRef.close();
    });
  }

  public getDepartments() {
    return this.departmentService.gets().subscribe(({ data }: any) => {
      this.departments = data;
    });
  }

  public getEmployees() {
    return this.employeeService.gets().subscribe(({ data }: any) => {
      this.employees = data;
    });
  }

  public setData() {
    if (this.data){
      this.form.patchValue({
        departmentId: this.data.department.id,
        employeeId: this.data.employee.id
      });
    }
  }
}
