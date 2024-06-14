/**
 * Generate a unique identifier string
 *
 * This function creates a unique identifier by combining a random letter,
 * a random hexadecimal string, and a portion of the current timestamp.
 *
 * @returns {string} A unique identifier string
 *
 * @example
 * const ID = uniqueIdentifier(); // Example output: "k4a3e8b7f21b"
 */
export function uniqueIdentifier(): string {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    + Math.random().toString(16).slice(2)
    + Date.now().toString(16).slice(4)
}
