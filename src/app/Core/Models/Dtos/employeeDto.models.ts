import { JsonpClientBackend } from "@angular/common/http";
import { Base } from "../base.models";

export interface EmployeeDto extends Base{
  name: string;
  lastname: string;
  departmentEmployees: [
    departmentId: string
  ]
}
