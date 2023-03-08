import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/errors/AppError';
import { Project } from '../infra/typeorm/entities/Project';
import { IProjectRepository } from '../repositories/IProjectRepository';

interface IRequest {
  project_name: string;
  user_id: string;
}

export class CreateProjectService {
  constructor(
    private projectRepository: IProjectRepository,
    private userRepository: IUserRepository,
  ) {}

  async execute({ project_name, user_id }: IRequest): Promise<Project> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found!', 404);
    }

    return this.projectRepository.create({
      admins: [user],
      members: [user],
      name: project_name,
    });
  }
}
