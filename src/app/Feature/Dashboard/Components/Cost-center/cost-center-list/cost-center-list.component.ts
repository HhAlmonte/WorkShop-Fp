import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CostCenterDto } from 'src/app/Core/Models/Dtos/cost-centerDto.models';
import { CostCenterService } from 'src/app/Core/Services/cost-center.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';
import { CostCenterFormComponent } from '../cost-center-form/cost-center-form.component';

@Component({
  selector: 'app-cost-center-list',
  templateUrl: './cost-center-list.component.html',
  styleUrls: ['./cost-center-list.component.scss'],
})
export class CostCenterListComponent implements OnInit {
  public costcenters: CostCenterDto[] = [];

  constructor(
    private _costCenterService: CostCenterService,
    private dialog: MatDialog,
    private sweetAlertService: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getCostCenters();
  }

  private getCostCenters(): void {
    this._costCenterService.gets().subscribe(({ data }: any) => {
      this.costcenters = data;
    });
  }

  public deleteCostCenter(id: string): void {
    this.sweetAlertService
      .opensweetalertdelete('¿Estas seguro de eliminar este centro de costo?')
      .subscribe((result) => {
        if (result) {
          this._costCenterService.delete(id).subscribe(() => {
            this.sweetAlertService.opensweetalertsuccess(
              'Centro de costo eliminado'
            );
            this.getCostCenters();
          });
        }
      });
  }

  public openDialogCreate() {
    this.dialog.open(CostCenterFormComponent);

    this.dialog.afterAllClosed.subscribe(() => {
      this.getCostCenters();
    });
  }

  public openDialogUpdate(costCenter: CostCenterDto) {
    this.dialog.open(CostCenterFormComponent, { data: costCenter });

    this.dialog.afterAllClosed.subscribe(() => {
      this.getCostCenters();
    });
  }
}
