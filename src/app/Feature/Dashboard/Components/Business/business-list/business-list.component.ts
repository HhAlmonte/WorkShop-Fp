import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessDto } from 'src/app/Core/Models/Dtos/businessDto.models';
import { BusinessService } from 'src/app/Core/Services/business.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';
import { BusinessFormComponent } from '../business-form/business-form.component';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {
  business: BusinessDto[] = [];

  constructor(
    public dialog: MatDialog,
    private _businessService: BusinessService,
    private sweeralertservice: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getBusiness();
  }

  getBusiness() {
    this._businessService.gets().subscribe(({data} : any) => {
      this.business = data;
    });
  }

  deleteBusiness(id: string) {
    this.sweeralertservice
      .opensweetalertdelete('¿Estas seguro de eliminar esta empresa?')
      .subscribe((result) => {
        if (result) {
          this._businessService.delete(id).subscribe(() => {
            this.sweeralertservice.opensweetalertsuccess('Empresa eliminada');
            this.getBusiness();
          });
        }
      });
  }

  openDialog() {
    this.dialog.open(BusinessFormComponent);

    this.dialog.afterAllClosed.subscribe(() => {
      this.getBusiness();
    });
  }

  openDialogEdit(business: BusinessDto) {
    this.dialog.open(BusinessFormComponent, {
      data: business,
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.getBusiness();
    });
  }
}
