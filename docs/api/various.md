---
outline: deep
prev: false
next: false
title: 'Various'
---

# 🧩 Various

A collection of utilities for diverse purposes.

## downloadURL <Badge type="tip" text="^0.0.4" />

This function triggers download of a file from the specified URL with the given filename.

::: details
```ts
/**
 * Downloads a file from the specified URL with the given filename.
 *
 * @param {string} url - The URL of the file to download.
 * @param {string} filename - The name to give the downloaded file.
 *
 * @example
 * downloadURL('https://example.com/report.pdf', 'report.pdf');
 */
```
:::
```ts
import { downloadURL } from '@paunovic/utils'

const URL = 'https://raw.githubusercontent.com/MilosPaunovic/utils/main/README.md'

downloadURL(URL, 'README.md')
```
