import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { DefaultDataSource } from '@shared/infra/typeorm/data_sources/DefaultDataSource';
import { Repository } from 'typeorm';
import { User } from '../entities/User';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = DefaultDataSource.getRepository(User);
  }

  async create(user: ICreateUserDTO): Promise<User> {
    const newUser = this.repository.create(user);

    return this.repository.save(newUser);
  }
}
