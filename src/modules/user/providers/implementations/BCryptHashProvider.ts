import { compare, hash } from 'bcrypt';
import { IHashProvider } from '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  async encrypt(phrase: string): Promise<string> {
    return hash(phrase, 8);
  }

  async compare(phrase: string, encrypted: string): Promise<boolean> {
    return compare(phrase, encrypted);
  }
}
