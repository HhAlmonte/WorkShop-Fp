import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CostCenterDto } from '../Models/Dtos/cost-centerDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class CostCenterService extends BaseService<CostCenterDto> {
  constructor(http: HttpClient) {
    super(http, 'cost-center');
  }
}
