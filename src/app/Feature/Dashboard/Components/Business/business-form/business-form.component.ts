import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessDto } from 'src/app/Core/Models/Dtos/businessDto.models';
import { OfficeDto } from 'src/app/Core/Models/Dtos/officeDto.models';
import { BusinessService } from 'src/app/Core/Services/business.service';
import { OfficeService } from 'src/app/Core/Services/office.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss'],
})
export class BusinessFormComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);
  public offices: OfficeDto[] = []

  constructor(
    private _businessService: BusinessService,
    private _officeService: OfficeService,
    private dialogRef: MatDialogRef<BusinessFormComponent>,
    private sweetalertService: SweetAlertService,
    @Inject(MAT_DIALOG_DATA) public data: BusinessDto
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getOffices();
    this.setData();
  }

  public submit() {
    const business: BusinessDto = {
      ...this.form.value,
    } as BusinessDto;

    if (this.data) {
      this.update(business);
    } else {
      this.create(business);
    }
  }

  public getOffices() {
    return this._officeService.gets().subscribe(({ data }: any) => {
      this.offices = data;
    });
  }

  private initializeForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      offices: new FormGroup({
        name: new FormControl('', [Validators.required]),
      })
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  private setData() {
    if (this.data) {
      this.form.patchValue({
        ...this.data
      });
    }
  }

  private update(business: BusinessDto) {
    if (this.form.valid) {
      let id: string = this.data.id;
      this._businessService.put(business, id).subscribe(() => {
        this.sweetalertService.opensweetalertsuccess('Business updated successfully');
        this.closeDialog();
      });
    }
  }

  private create(business: BusinessDto) {
    if (this.form.valid) {
      this._businessService.post(business).subscribe(() => {
        this.sweetalertService.opensweetalertsuccess('Business created successfully');
        this.closeDialog();
      });
    }
  }
}
