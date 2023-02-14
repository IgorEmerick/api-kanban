export async function validateName(name: string): Promise<boolean> {
  return /^([a-b]| )+$/i.test(name);
}
