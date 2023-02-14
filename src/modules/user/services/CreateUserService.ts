import { AppError } from '@shared/errors/AppError';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IHashProvider } from '../providers/models/IHashProvider';
import { IUserRepository } from '../repositories/IUserRepository';
import { validateEmail } from '../utils/validateEmail';

export class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute({ email, name, password }: ICreateUserDTO): Promise<User> {
    const validEmail = await validateEmail(email);

    if (!validEmail) {
      throw new AppError('Invalid email!', 400);
    }

    const encryptedPassword = await this.hashProvider.encrypt(password);

    return this.userRepository.create({
      email,
      name,
      password: encryptedPassword,
    });
  }
}
