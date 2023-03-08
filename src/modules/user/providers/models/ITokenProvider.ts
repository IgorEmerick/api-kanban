export interface ITokenProvider {
  generateToken(payload: object): Promise<string>;
  validateToken<T>(token: string): Promise<T>;
}
