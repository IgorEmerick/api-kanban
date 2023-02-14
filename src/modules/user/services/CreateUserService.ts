import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IHashProvider } from '../providers/models/IHashProvider';
import { IUserRepository } from '../repositories/IUserRepository';

export class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ email, name, password }: ICreateUserDTO): Promise<User> {
    const encryptedPassword = await this.hashProvider.encrypt(password);

    return this.userRepository.create({
      email,
      name,
      password: encryptedPassword,
    });
  }
}
