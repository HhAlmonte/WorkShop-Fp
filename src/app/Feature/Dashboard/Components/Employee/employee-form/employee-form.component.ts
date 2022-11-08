import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartmentDto } from 'src/app/Core/Models/Dtos/DeparmentDto.models';
import { EmployeeDto } from 'src/app/Core/Models/Dtos/employeeDto.models';
import { DeparmentService } from 'src/app/Core/Services/deparment.service';
import { EmployeeService } from 'src/app/Core/Services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public departments: DepartmentDto[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _departmentService: DeparmentService,
    private _dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeDto
  ) {}

  ngOnInit(): void {
    this.initializaForm();
    this.getDepartments();
    this.setData();
  }

  public submit() {
    const employee: EmployeeDto = {
      ...this.form.value,
    } as EmployeeDto;

    if (this.data.id == '') {
      this.update(employee);
    } else {
      this.create(employee);
    }
  }

  private initializaForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      departmentEmployees: new FormGroup({
        departmentId: new FormControl('', [Validators.required]),
      }),
    });
  }

  public getDepartments() {
    return this._departmentService.gets().subscribe(({ data }: any) => {
      this.departments = data;
    });
  }

  private setData() {
    if (this.data) {
      this.form.patchValue({
        ...this.data
      });
    }
  }

  private update(employee: EmployeeDto) {
    if (this.form.valid) {
      this._employeeService.put(employee).subscribe(() => {
        this._dialogRef.close();
      });
    }
  }

  private create(employee: EmployeeDto) {
    if (this.form.valid) {
      this._employeeService.post(employee).subscribe(() => {
        this._dialogRef.close();
      });
    }
  }
}
