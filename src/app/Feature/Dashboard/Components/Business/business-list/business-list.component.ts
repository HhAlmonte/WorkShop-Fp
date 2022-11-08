import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessDto } from 'src/app/Core/Models/Dtos/businessDto.models';
import { BusinessService } from 'src/app/Core/Services/business.service';
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
    private _businessService: BusinessService
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
    this._businessService.delete(id).subscribe(() => {
      this.getBusiness();
    });
  }

  openDialog() {
    this.dialog.open(BusinessFormComponent, {
      width: '250px',
      data: { name: 'test' },
    });
  }
}
