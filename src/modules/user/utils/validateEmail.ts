export async function validateEmail(email: string): Promise<boolean> {
  return /^([a-z]|\d|_|\.)+@([a-z]|_|\.)+\.com(\.br)?$/i.test(email);
}
