import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentDto } from '../Models/Dtos/DeparmentDto.models';
import { OfficeDto } from '../Models/Dtos/officeDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class OfficeService extends BaseService<OfficeDto> {
  constructor(http: HttpClient) {
    super(http, 'office');
  }
}
