import { Component, OnInit } from '@angular/core';
import { AddressDto } from 'src/app/Core/Models/Dtos/addressDto.models';
import { AddressService } from 'src/app/Core/Services/address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
  public address: AddressDto[] = [];

  constructor(private _addressService: AddressService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  public getAddress() {
    this._addressService.gets().subscribe(({ data }: any) => {
      this.address = data;
    });
  }

  public deleteAddress(id: string) {
    this._addressService.delete(id).subscribe(() => {
      this.getAddress();
    });
  }
}
