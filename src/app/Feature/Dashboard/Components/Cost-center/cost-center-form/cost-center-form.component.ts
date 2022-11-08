import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CostCenterDto } from 'src/app/Core/Models/Dtos/cost-centerDto.models';
import { CostCenterService } from 'src/app/Core/Services/cost-center.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-cost-center-form',
  templateUrl: './cost-center-form.component.html',
  styleUrls: ['./cost-center-form.component.scss'],
})
export class CostCenterFormComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  constructor(
    private costcenterService: CostCenterService,
    private dialogRef: DialogRef,
    private sweetalertService: SweetAlertService,
    @Inject(MAT_DIALOG_DATA) public data: CostCenterDto
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setData();
  }

  public submit() {
    const costCenter: CostCenterDto = {
      ...this.form.value
    } as CostCenterDto

    if(this.data){
      this.update(costCenter)
    }else{
      this.create(costCenter);
    }
  }

  private create(costCenter: CostCenterDto) {
    if (this.form.valid) {
      this.costcenterService.post(costCenter).subscribe(({ data }: any) => {
        this.dialogRef.close();
        this.sweetalertService.opensweetalertsuccess('Centro de costo creado');
      });
    }
  }

  private update(costCenter: CostCenterDto) {
    let id: string = this.data.id;
    this.costcenterService.put(costCenter, id).subscribe(({data}: any) => {
      this.dialogRef.close();
      this.sweetalertService.opensweetalertsuccess('Centro de costo actualizado');
    })
  }

  private initializeForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  private setData() {
    if (this.data) {
      this.form.patchValue({
        name: this.data.name,
      });
    }
  }
}
