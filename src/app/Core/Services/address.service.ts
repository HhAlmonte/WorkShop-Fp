import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressDto } from '../Models/Dtos/addressDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends BaseService<AddressDto> {
  constructor(http: HttpClient) {
    super(http, 'adress');
  }
}
