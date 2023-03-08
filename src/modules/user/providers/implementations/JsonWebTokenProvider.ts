import { sign, verify } from 'jsonwebtoken';
import { ITokenProvider } from '../models/ITokenProvider';

export class JsonWebTokenProvider implements ITokenProvider {
  async generateToken(payload: object): Promise<string> {
    return sign(payload, process.env.AUTHENTICATION_SECRET, {
      expiresIn: '7 days',
    });
  }

  async validateToken<T>(token: string): Promise<T> {
    return verify(token, process.env.AUTHENTICATION_SECRET) as T;
  }
}
