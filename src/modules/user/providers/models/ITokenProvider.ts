export interface ITokenProvider {
  generateToken(payload: string | object): Promise<string>;
}
