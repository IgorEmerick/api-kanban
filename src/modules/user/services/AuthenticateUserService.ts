import { AppError } from '@shared/errors/AppError';
import { IUserRepository } from '../repositories/IUserRepository';
import { validateEmail } from '../utils/validateEmail';
import { validatePassword } from '../utils/validatePassword';
import { IHashProvider } from '../providers/models/IHashProvider';
import { ITokenProvider } from '../providers/models/ITokenProvider';

export class AuthenticateUserService {
  constructor(
    private userRepository: IUserRepository,

    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    if (!validateEmail || !validatePassword) {
      throw new AppError('Invalid authentication!', 401);
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user || !(await this.hashProvider.compare(password, user.password))) {
      throw new AppError('Invalid authentication!', 401);
    }

    return this.tokenProvider.generateToken({ user_id: user.id });
  }
}
