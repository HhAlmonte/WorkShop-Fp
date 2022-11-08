import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentEmployeeDto } from '../Models/Dtos/Department-employeeDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentEmployeeService extends BaseService<DepartmentEmployeeDto> {
  constructor(http: HttpClient) {
    super(http, 'department-employee');
  }
}
