export async function validateName(name: string): Promise<boolean> {
  return /^([a-z]| |')+([a-z]|')$/i.test(name);
}
