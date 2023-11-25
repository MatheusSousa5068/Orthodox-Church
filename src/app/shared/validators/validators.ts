export function createStrongPassword(value: string): boolean {
  const hasUpperLetters = /[A-Z]/.test(value);
  const hasNumbers = /\d/.test(value);
  const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/-]/.test(value);

  const hasNullBytes = /%00/.test(value);
  const hasNewLineCharacters = /%0[da]|[\r\n]/.test(value);
  const hasDotDotSlash = /\.\.\/|\.\.\\/.test(value) || /%c0%ae%c0%ae\//.test(value);

  const validPassword =
    hasUpperLetters &&
    hasNumbers &&
    hasSpecialCharacters &&
    !hasNullBytes &&
    !hasNewLineCharacters &&
    !hasDotDotSlash;

  return validPassword;
}
