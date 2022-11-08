import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDto } from 'src/app/Core/Models/Dtos/userDto.models';
import { UserService } from 'src/app/Core/Services/user.service';
import { SignUpComponent } from 'src/app/Feature/Auth/sign-up/sign-up.component';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: UserDto[] = [];
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private sweetalertService: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.gets().subscribe(({ data }: any) => {
      this.users = data;
    });
  }

  public deleteUser(id: string): void {
    this.sweetalertService
      .opensweetalertdelete('¿Estas seguro de eliminar este usuario?')
      .subscribe((result) => {
        if (result) {
          this.userService.delete(id).subscribe(() => {
            this.sweetalertService.opensweetalertsuccess('Usuario eliminado');
            this.getUsers();
          });
        }
      });
  }

  openDialog() {
    this.dialog.open(SignUpComponent, {
      width: '1000px',
      height: '600px',
    });
  }
}
