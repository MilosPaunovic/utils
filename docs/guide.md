---
outline: deep
prev: false
next: false
---

# Getting Started

A versatile collection of utility functions for simplifying JavaScript development.

## ⚡️ Online Playground

[Open in CodePen](https://codepen.io/milospaunovic/pen/oNRpBoz?editors=0012)

## 📦 Install

```bash
# Using npm to install as a development dependency
npm install --save-dev @paunovic/utils

# Using Yarn to add as a development dependency
yarn add --dev @paunovic/utils

# Using pnpm to add as a development dependency
pnpm add --save-dev @paunovic/utils
```

## 🪄 Usage

```ts
// Importing specific function using ESM syntax
import { uniqueIdentifier } from '@paunovic/utils'

// Importing specific function directly from the URL
import { uniqueIdentifier } from 'https://unpkg.com/@paunovic/utils'

// Importing specific function using CommonJS syntax
const { uniqueIdentifier } = require('@paunovic/utils')

// Seeing the imported function in action
const ID = uniqueIdentifier()
```
