import { Base } from "../base.models";

export interface UserDto extends Base {
  email: string;
  password: string;
  name: string;
  lastname: string;
  username: string;
  data: {
    access_token: string;
  }
}
