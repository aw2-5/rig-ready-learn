// List of admin emails with their roles
export const ADMIN_EMAILS = [
  'awsalnoimy25@gmail.com',
  'aws.23pm57@student.uomosul.edu.iq',
];

export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.some(admin => admin.toLowerCase() === email.toLowerCase());
}
