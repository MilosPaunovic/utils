import { expect, it } from 'vitest'
import { uniqueIdentifier } from '../src/index'

const identifierPattern = /^[a-z][0-9a-f]{11,26}$/

it('uniqueIdentifier returns a string', () => {
  const ID = uniqueIdentifier()
  expect(typeof ID).toEqual('string')
})

it('uniqueIdentifier has a length greater than or equal to 12', () => {
  const ID = uniqueIdentifier()
  expect(ID.length).toBeGreaterThanOrEqual(12)
})

it('uniqueIdentifier has a length less than or equal to 27', () => {
  const ID = uniqueIdentifier()
  expect(ID.length).toBeLessThanOrEqual(27)
})

it('uniqueIdentifier matches the identifier pattern', () => {
  const ID = uniqueIdentifier()
  expect(ID).toMatch(identifierPattern)
})

it('uniqueIdentifier generates different IDs on consecutive calls', () => {
  const first = uniqueIdentifier()
  const second = uniqueIdentifier()
  expect(first).not.toEqual(second)
})

it('uniqueIdentifier generates consistent IDs in 1000 iterations', () => {
  for (let i = 0; i < 1000; i++) {
    const ID = uniqueIdentifier()
    expect(ID.length).toBeGreaterThanOrEqual(12)
    expect(ID.length).toBeLessThanOrEqual(27)
    expect(ID).toMatch(identifierPattern)
  }
})
