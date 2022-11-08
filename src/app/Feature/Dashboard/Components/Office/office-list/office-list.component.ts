import { Component, OnInit } from '@angular/core';
import { OfficeDto } from 'src/app/Core/Models/Dtos/officeDto.models';
import { OfficeService } from 'src/app/Core/Services/office.service';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss'],
})
export class OfficeListComponent implements OnInit {
  public offices: OfficeDto[] = [];

  constructor(private _officeService: OfficeService) {
    this.getOffices()
  }

  ngOnInit(): void {}

  public getOffices() {
    this._officeService.gets().subscribe(({ data }: any) => {
      this.offices = data;
    });
  }

  public deleteOffice(id: string) {
    this._officeService.delete(id).subscribe(() => {
      this.getOffices();
    });
  }
}
