import { sign } from 'jsonwebtoken';
import { ITokenProvider } from '../models/ITokenProvider';

export class JsonWebTokenProvider implements ITokenProvider {
  async generateToken(payload: string | object): Promise<string> {
    return sign(payload, process.env.AUTHENTICATION_SECRET, {
      expiresIn: '7 days',
    });
  }
}
