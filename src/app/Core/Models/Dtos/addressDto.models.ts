import { Base } from "../base.models";

export interface AddressDto extends Base {
  street: string,
  numeration: string,
  city: string,
  state: string,
  postCode: string,
  country: country
}

export interface country extends Base{
  name: string;
}
