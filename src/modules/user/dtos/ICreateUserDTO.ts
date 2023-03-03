import { Project } from '@modules/board/infra/typeorm/entities/Project';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  managed_projects?: Project[];
  projects?: Project[];
}
