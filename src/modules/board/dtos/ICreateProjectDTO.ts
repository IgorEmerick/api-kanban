import { User } from '@modules/user/infra/typeorm/entities/User';

export interface ICreateProjectDTO {
  name: string;
  admins: User[];
  members: User[];
}
