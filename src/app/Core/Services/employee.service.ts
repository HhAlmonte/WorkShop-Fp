import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDto } from '../Models/Dtos/employeeDto.models';
import { UserDto } from '../Models/Dtos/userDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService<EmployeeDto> {
  constructor(http: HttpClient) {
    super(http, 'employee');
  }
}
