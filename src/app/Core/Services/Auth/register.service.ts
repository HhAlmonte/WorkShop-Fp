import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../../Models/Dtos/userDto.models';
import { BaseService } from '../Base/base.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<UserDto> {
  constructor(http: HttpClient) {
    super(http, 'auth/sign-up');
  }
}
