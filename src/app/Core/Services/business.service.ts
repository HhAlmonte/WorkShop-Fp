import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessDto } from '../Models/Dtos/businessDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessService extends BaseService<BusinessDto> {
  constructor(http: HttpClient) {
    super(http, 'business');
  }
}
