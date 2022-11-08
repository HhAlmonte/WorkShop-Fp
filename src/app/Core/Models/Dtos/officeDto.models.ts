import { Base } from "../base.models";
import { AddressDto } from "./addressDto.models";
import { BusinessDto } from "./businessDto.models";
import { DepartmentDto } from "./DeparmentDto.models";

export interface OfficeDto extends Base{
  name: string;
  description: string;
  adress: AddressDto;
  business: BusinessDto;
  departments: DepartmentDto[];
  adressId: string;
  businessId: string;
}
