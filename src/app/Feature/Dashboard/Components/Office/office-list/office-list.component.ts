import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OfficeDto } from 'src/app/Core/Models/Dtos/officeDto.models';
import { OfficeService } from 'src/app/Core/Services/office.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';
import { OfficeFormComponent } from '../office-form/office-form.component';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss'],
})
export class OfficeListComponent implements OnInit {
  public offices: OfficeDto[] = [];

  constructor(
    private _officeService: OfficeService,
    private _dialog: MatDialog,
    private sweetAlertService: SweetAlertService
  ) {
    this.getOffices();
  }

  ngOnInit(): void {}

  public getOffices() {
    this._officeService.gets().subscribe(({ data }: any) => {
      this.offices = data;
    });
  }

  public deleteOffice(id: string) {
    this.sweetAlertService
      .opensweetalertdelete('¿Estas seguro de eliminar esta oficina?')
      .subscribe((result) => {
        if (result) {
          this._officeService.delete(id).subscribe(() => {
            this.sweetAlertService.opensweetalertsuccess('Oficina eliminada');
            this.getOffices();
          });
        }
      });
  }

  public openDialogCreate() {
    this._dialog.open(OfficeFormComponent);

    this._dialog.afterAllClosed.subscribe(() => {
      this.getOffices();
    })
  }

  public openDialogEdit(office: OfficeDto){
    this._dialog.open(
      OfficeFormComponent,
      {
        data: office
      }
    )

    this._dialog.afterAllClosed.subscribe(() => {
      this.getOffices();
    });
  }
}
