import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Core/Models/Dtos/userDto.models';
import { LoginService } from 'src/app/Core/Services/Auth/login.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);
  public user!: UserDto;
  public loading!: boolean;

  constructor(
    private _authService: LoginService,
    private router: Router,
    private sweetalertService: SweetAlertService
  ) {
    const token = this._authService.getToken();
    if (token) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  public submit(): void {
    const user: UserDto = {
      ...this.form.value,
    } as UserDto;

    this.loading = true;

    this._authService.post(user).subscribe(
      (data) => {
        this.user = data as any;
        this._authService.setToken(this.user.data.access_token);
        this.router.navigate(['dashboard']);
      },
      () => {
        this.loading = false;
        this.sweetalertService.opensweetalerterror('Usuario o contraseña incorrectos');
      }
    );
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{6,}$'),
      ]),
    });
  }
}
