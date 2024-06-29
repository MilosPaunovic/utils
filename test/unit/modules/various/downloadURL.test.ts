import { describe, expect, it } from 'vitest'
import { downloadURL } from '../../../../src/index'

const INVALID = 'invalid'
const VALID = 'https://example.com/report.pdf'
const NAME = 'report.pdf'

describe('downloadURL', () => {
  it('throws error on invalid URL', () => {
    expect(() => downloadURL(INVALID, NAME)).toThrow('Invalid URL provided.')
  })

  it('throws error on missing filename', () => {
    expect(() => downloadURL(VALID)).toThrow('Filename is required.')
  })
})
