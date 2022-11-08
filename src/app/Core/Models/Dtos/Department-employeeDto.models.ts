import { Base } from "../base.models"
import { DepartmentDto } from "./DeparmentDto.models"
import { EmployeeDto } from "./employeeDto.models"

export interface DepartmentEmployeeDto extends Base{
  department: DepartmentDto
  employee: EmployeeDto
}
