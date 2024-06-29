/**
 * Downloads a file from the specified URL with the given filename.
 *
 * @param {string} url - The URL of the file to download.
 * @param {string} [filename] - The name to give the downloaded file.
 *
 * @example
 * downloadURL('https://example.com/file.pdf', 'myfile.pdf');
 *
 * @example
 * downloadURL('https://example.com/image.png'); // Filename will be 'download'
 */
export function downloadURL(url: string, filename: string = 'download'): void {
  try {
    // Validate URL
    let validatedURL
    try {
      validatedURL = new URL(url)
    }
    catch (_) {
      throw new Error('Invalid URL provided')
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
      console.error('Error downloading the file:', error.message)
    }
    else {
      console.error('An unknown error occurred')
    }
  }
}
