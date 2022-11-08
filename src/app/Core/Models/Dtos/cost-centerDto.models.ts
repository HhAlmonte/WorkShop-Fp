import { Base } from "../base.models";
import { country } from "./addressDto.models";

export interface CostCenterDto extends Base {
  name: string,
  country: country
}
