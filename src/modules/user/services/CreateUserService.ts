import { AppError } from '@shared/errors/AppError';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IHashProvider } from '../providers/models/IHashProvider';
import { IUserRepository } from '../repositories/IUserRepository';
import { validateEmail } from '../utils/validateEmail';
import { validateName } from '../utils/validateName';
import { validatePassword } from '../utils/validatePassword';

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

    const validName = await validateName(name);

    if (!validName) {
      throw new AppError('Invalid name!', 400);
    }

    const validPassword = await validatePassword(password);

    if (!validPassword) {
      throw new AppError('Invalid password!', 400);
    }

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new AppError('This user already exists!', 400);
    }

    const encryptedPassword = await this.hashProvider.encrypt(password);

    return this.userRepository.create({
      email,
      name,
      password: encryptedPassword,
    });
  }
}
