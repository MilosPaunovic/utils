/**
 * Downloads a file from the specified URL with the given filename.
 *
 * @param {string} url - The URL of the file to download.
 * @param {string} filename - The name to give the downloaded file.
 *
 * @example
 * downloadURL('https://example.com/report.pdf', 'report.pdf');
 */
export function downloadURL(url: string, filename: string): void {
  try {
    // Validate URL
    let validatedURL
    try {
      validatedURL = new URL(url)
    }
    catch (_) {
      throw new Error('Invalid URL provided.')
    }

    // Check if filename is provided and not empty
    if (!filename || filename.trim() === '') {
      throw new Error('Filename is required.')
    }

    // Create a temporary link element
    const link: HTMLAnchorElement = document.createElement('a')
    link.href = validatedURL.toString()
    link.setAttribute('download', filename)
    link.setAttribute('target', '_blank')

    // Append the link to the body, trigger the download, then remove the link
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      throw new TypeError(`Error downloading the file: ${error.message}.`)
    }
    else {
      throw new TypeError('An unknown error occurred.')
    }
  }
}
