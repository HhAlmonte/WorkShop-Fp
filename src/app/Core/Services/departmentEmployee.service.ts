import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessDto } from '../Models/Dtos/businessDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmentEmployeeService extends BaseService<BusinessDto> {
  constructor(http: HttpClient) {
    super(http, 'department-employee');
  }
}
