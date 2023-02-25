export interface IHashProvider {
  encrypt(phrase: string): Promise<string>;
  compare(phrase: string, encrypted: string): Promise<boolean>;
}
