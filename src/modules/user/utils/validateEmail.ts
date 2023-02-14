export async function validateEmail(email: string): Promise<boolean> {
  return /^([a-b]|[_]|\d)+@[a-b]+\.com(\.br)?$/i.test(email);
}
