const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789'

/**
 * Generates a unique 21-character identifier string.
 *
 * @description
 * This function generates a unique identifier consisting of:
 *
 * - A single random lowercase letter at the beginning.
 * - A random alphanumeric string of 12 characters.
 * - The last 8 characters of the current timestamp in hexadecimal format.
 *
 * @returns {string} A unique 21-character identifier string.
 *
 * @example
 * const ID = uniqueIdentifier(); // "k4a3e8b7f21bqwertyuio"
 */
export function uniqueIdentifier(): string {
  // Generate the first character (must be a letter)
  let uid = String.fromCharCode(Math.floor(Math.random() * 26) + 97)

  // Generate the middle part of the UID with a combination of letters and numbers
  for (let i = 1; i < 13; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length)
    uid += CHARACTERS[randomIndex]
  }

  // Append the last 8 characters of the current timestamp in hexadecimal
  uid += Date.now().toString(16).slice(-8)

  return uid
}
