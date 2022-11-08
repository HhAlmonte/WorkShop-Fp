import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BusinessDto } from 'src/app/Core/Models/Dtos/businessDto.models';
import { BusinessService } from 'src/app/Core/Services/business.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss'],
})
export class BusinessFormComponent implements OnInit {
  public form: FormGroup = new FormGroup([]);
  private business!: BusinessDto;
  constructor(
    private _businessService: BusinessService,
    private dialogRef: MatDialogRef<BusinessFormComponent>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public submit() {
    const business: BusinessDto = {
      ...this.form.value,
    } as BusinessDto;

    this._businessService.post(business).subscribe(
      () => {
        this.closeDialog();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private initializeForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  public closeDialog() {
    this.dialogRef.close();
  }
}
