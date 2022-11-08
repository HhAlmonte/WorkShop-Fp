import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/Core/Models/Dtos/userDto.models';
import { RegisterService } from 'src/app/Core/Services/Auth/register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);
  public user!: UserDto;

  constructor(
    private _registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public submit(): void {
    const user: UserDto = {
      ...this.form.value,
    } as UserDto;

    this._registerService.post(user).subscribe(
      (data) => {
        this.user = data as any;

        this.router.navigate(['sign-in']);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{6,}$'),
      ]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    });
  }
}
