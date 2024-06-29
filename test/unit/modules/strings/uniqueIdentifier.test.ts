import { expect, it } from 'vitest'
import { uniqueIdentifier } from 'src/index'

const PATTERN = /^[a-z][a-z0-9]{12}[0-9a-f]{8}$/

it('uniqueIdentifier returns a string', () => {
  const ID = uniqueIdentifier()
  expect(typeof ID).toEqual('string')
})

it('uniqueIdentifier has a length of 21 characters', () => {
  const ID = uniqueIdentifier()
  expect(ID.length).toEqual(21)
})

it('uniqueIdentifier starts with a lowercase letter', () => {
  const ID = uniqueIdentifier()
  expect(ID[0]).toMatch(/[a-z]/)
})

it('uniqueIdentifier matches the pattern', () => {
  const ID = uniqueIdentifier()
  expect(ID).toMatch(PATTERN)
})

it('uniqueIdentifier generates different IDs on consecutive calls', () => {
  const first = uniqueIdentifier()
  const second = uniqueIdentifier()
  expect(first).not.toEqual(second)
})

it('uniqueIdentifier generates consistent IDs in 100000 iterations', () => {
  for (let i = 0; i < 100000; i++) {
    const ID = uniqueIdentifier()
    expect(ID.length).toEqual(21)
    expect(ID).toMatch(PATTERN)
  }
})

it('uniqueIdentifier performance test: generate 1 million IDs', () => {
  const startTime = performance.now()
  for (let i = 0; i < 1000000; i++)
    uniqueIdentifier()

  const endTime = performance.now()
  const duration = endTime - startTime
  expect(duration).toBeLessThan(1000) // Assert that the generation takes less than 1 second
})

it('uniqueIdentifier generates unique IDs concurrently', async () => {
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
