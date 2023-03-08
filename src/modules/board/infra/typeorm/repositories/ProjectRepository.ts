import { ICreateProjectDTO } from '@modules/board/dtos/ICreateProjectDTO';
import { IProjectRepository } from '@modules/board/repositories/IProjectRepository';
import { DefaultDataSource } from '@shared/infra/typeorm/data_sources/DefaultDataSource';
import { Repository } from 'typeorm';
import { Project } from '../entities/Project';

export class ProjectRepository implements IProjectRepository {
  private repository: Repository<Project>;

  constructor() {
    this.repository = DefaultDataSource.getRepository(Project);
  }

  async create(project: ICreateProjectDTO): Promise<Project> {
    const newProject = this.repository.create(project);

    return this.repository.save(newProject);
  }
}
