import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from '../../Models/Dtos/userDto.models';
import { BaseService } from '../Base/base.service';

import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<UserDto> {

  constructor(http: HttpClient) {
    super(http, 'auth/sign-in');
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getIdByTokenDecoded(): any {
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(localStorage.getItem('token')?.toString());

    return decodedToken.sub;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public deleteToken(): void {
    localStorage.removeItem('token');
  }
}
