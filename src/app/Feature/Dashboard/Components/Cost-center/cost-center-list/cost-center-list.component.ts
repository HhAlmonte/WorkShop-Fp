import { Component, OnInit } from '@angular/core';
import { CostCenterDto } from 'src/app/Core/Models/Dtos/cost-centerDto.models';
import { CostCenterService } from 'src/app/Core/Services/cost-center.service';

@Component({
  selector: 'app-cost-center-list',
  templateUrl: './cost-center-list.component.html',
  styleUrls: ['./cost-center-list.component.scss'],
})
export class CostCenterListComponent implements OnInit {
  public costcenters: CostCenterDto[] = [];

  constructor(private _costCenterService: CostCenterService) {}

  ngOnInit(): void {
    this.getCostCenters();
  }

  private getCostCenters(): void {
    this._costCenterService.gets().subscribe(({ data }: any) => {
      this.costcenters = data;
    });
  }

  public deleteCostCenter(id: string): void {
    this._costCenterService.delete(id).subscribe(() => {
      this.getCostCenters();
    });
  }
}
