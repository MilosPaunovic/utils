---
outline: deep
prev: false
next: false
title: 'Strings'
---

# 📝 Strings

Versatile utilities for generating and manipulating strings.

## uniqueIdentifier <Badge type="tip" text="^0.0.1" />

Generates a unique 21-character identifier string.

::: details JSDoc
```ts
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
```
:::
```ts
import { uniqueIdentifier } from '@paunovic/utils'

const ID = uniqueIdentifier() // "k4a3e8b7f21bqwertyuio"
```
