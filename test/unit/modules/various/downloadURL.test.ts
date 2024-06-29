import { describe, expect, it } from 'vitest'
import { downloadURL } from 'src/index'

const INVALID = 'invalid'

describe('downloadURL', () => {
  it('throws error on invalid URL', () => {
    expect(() => downloadURL(INVALID)).toThrow('Invalid URL provided')
  })
})
