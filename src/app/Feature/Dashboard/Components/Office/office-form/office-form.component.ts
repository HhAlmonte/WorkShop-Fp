import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddressDto } from 'src/app/Core/Models/Dtos/addressDto.models';
import { BusinessDto } from 'src/app/Core/Models/Dtos/businessDto.models';
import { OfficeDto } from 'src/app/Core/Models/Dtos/officeDto.models';
import { AddressService } from 'src/app/Core/Services/address.service';
import { BusinessService } from 'src/app/Core/Services/business.service';
import { OfficeService } from 'src/app/Core/Services/office.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-office-form',
  templateUrl: './office-form.component.html',
  styleUrls: ['./office-form.component.scss'],
})
export class OfficeFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public address: AddressDto[] = [];
  public business: BusinessDto[] = [];

  constructor(
    private _officeService: OfficeService,
    private _businessService: BusinessService,
    private _addressService: AddressService,
    private sweetalertService: SweetAlertService,
    private dialogRef: MatDialogRef<OfficeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OfficeDto
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getAddress();
    this.getBusiness();
    this.setData();
  }

  public submit() {
    const office: OfficeDto={
      ...this.form.value
    } as OfficeDto

    if(this.data){
      this.update(office)
    }else{
      this.create(office)
    }
  }

  private initializeForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adressId: new FormControl('', [Validators.required]),
      businessId: new FormControl('', [Validators.required]),
    });
  }

  private create(office: OfficeDto) {
    if (this.form.valid) {
      this._officeService.post(office).subscribe(() => {
        this.sweetalertService.opensweetalertsuccess('La oficina se ha creado correctamente');
        this.dialogRef.close();
      });
    }
  }

  private update(office: OfficeDto) {
    let id: string = this.data.id;
    if (this.form.valid) {
      this._officeService.put(office, id).subscribe(() => {
        this.sweetalertService.opensweetalertsuccess('La oficina se ha actualizado correctamente');
        this.dialogRef.close();
      });
    }
  }

  private getAddress() {
    this._addressService.gets().subscribe(({ data }: any) => {
      this.address = data;
    });
  }

  private getBusiness() {
    this._businessService.gets().subscribe(({ data }: any) => {
      this.business = data;
    });
  }

  private setData() {
    if (this.data) {
      this.form.patchValue({
        ...this.data,
      });
    }
  }
}
