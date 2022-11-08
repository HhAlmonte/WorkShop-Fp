import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Core/Models/Dtos/userDto.models';
import { LoginService } from 'src/app/Core/Services/Auth/login.service';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  public userName !: string;

  constructor(
    private _loginService: LoginService,
    private _userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserName();
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut() {
    this._loginService.deleteToken();
    this.router.navigate(['/auth/login']);
  }

  getUserName(): any{
    let token = this._loginService.getIdByTokenDecoded();

    this._userService.get(token).subscribe(({data} : any) =>{
      this.userName = data.username
    });
  }
}
