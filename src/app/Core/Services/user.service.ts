import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDto } from '../Models/Dtos/userDto.models';
import { BaseService } from './Base/base.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserDto> {
  constructor(http: HttpClient) {
    super(http, 'user');
  }

  public setUserName(userName: string){
    localStorage.setItem('userName', userName)
  }
}
