import { Component, OnInit } from '@angular/core';
import { AddressDto } from 'src/app/Core/Models/Dtos/addressDto.models';
import { AddressService } from 'src/app/Core/Services/address.service';
import { SweetAlertService } from 'src/app/Miscelaneo/sweetalert.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements OnInit {
  public address: AddressDto[] = [];

  constructor(
    private _addressService: AddressService,
    private sweetalertService: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.getAddress();
  }

  public getAddress() {
    this._addressService.gets().subscribe(({ data }: any) => {
      this.address = data;
    });
  }

  public deleteAddress(id: string) {
    this.sweetalertService.opensweetalertdelete('¿Estas seguro de eliminar esta dirección?')
      .subscribe((result) => {
        if(result){
          this._addressService.delete(id).subscribe(() => {
            this.sweetalertService.opensweetalertsuccess('Dirección eliminada');
            this.getAddress();
          });
        }
      });
  }
}
