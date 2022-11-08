import { Base } from '../base.models';
import { OfficeDto } from './officeDto.models';

export interface DepartmentDto extends Base {
  name: string;
  office: OfficeDto;
  boss: {
    name: string;
    lastName: string;
  };
  departmentEmployees: [
    {
      employeeId: string;
    }
  ];
}
