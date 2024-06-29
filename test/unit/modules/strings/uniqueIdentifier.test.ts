import { describe, expect, it } from 'vitest'
import { uniqueIdentifier } from '../../../../src/index'

const PATTERN = /^[a-z][a-z0-9]{12}[0-9a-f]{8}$/

describe('uniqueIdentifier', () => {
  it('returns a string', () => {
    const ID = uniqueIdentifier()
    expect(typeof ID).toEqual('string')
  })

  it('has a length of 21 characters', () => {
    const ID = uniqueIdentifier()
    expect(ID.length).toEqual(21)
  })

  it('starts with a lowercase letter', () => {
    const ID = uniqueIdentifier()
    expect(ID[0]).toMatch(/[a-z]/)
  })

  it('matches the pattern', () => {
    const ID = uniqueIdentifier()
    expect(ID).toMatch(PATTERN)
  })

  it('generates different IDs on consecutive calls', () => {
    const first = uniqueIdentifier()
    const second = uniqueIdentifier()
    expect(first).not.toEqual(second)
  })

  it('generates consistent IDs in 100000 iterations', () => {
    for (let i = 0; i < 100000; i++) {
      const ID = uniqueIdentifier()
      expect(ID.length).toEqual(21)
      expect(ID).toMatch(PATTERN)
    }
  })

  it('generates unique IDs concurrently', async () => {
    const numberOfConcurrentCalls = 100000
    const ids = await Promise.all(
      Array.from({ length: numberOfConcurrentCalls }, () => uniqueIdentifier()),
    )

    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toEqual(numberOfConcurrentCalls)

    ids.forEach((ID) => {
      expect(ID.length).toEqual(21)
      expect(ID).toMatch(PATTERN)
    })
  })
})
