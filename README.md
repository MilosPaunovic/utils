<div align="center">
  <a href="https://milospaunovic.github.io/utils"><img src="https://raw.githubusercontent.com/MilosPaunovic/utils/main/docs/public/logo/dark.png" alt="utils." /></a>

  <p>A versatile collection of utility functions for simplifying JavaScript development.</p>

  <a href="https://www.npmjs.com/package/@paunovic/utils"><img src="https://img.shields.io/npm/v/@paunovic/utils" alt="version" /></a>
  <a href="https://www.npmjs.com/package/@paunovic/utils"><img src="https://badgen.net/npm/dm/@paunovic/utils" alt="downloads" /></a>
  <a href="https://github.com/MilosPaunovic/utils/actions/workflows/ci.yml"><img src="https://github.com/MilosPaunovic/utils/actions/workflows/ci.yml/badge.svg" alt="ci" /></a>

  <a href="https://milospaunovic.github.io/utils"><h3>Official documentation</h3></a>
</div>

## ⚡️ Online Playground

Explore and experiment with our code in an interactive online playground on CodePen. Click the link below to dive into the online playground environment!

[Open in CodePen](https://codepen.io/milospaunovic/pen/oNRpBoz?editors=0012)

## 🚀 Features

- 📝 Strings - Versatile utilities for generating and manipulating strings.
- 🔢 Numbers - Utilities for generating, manipulating, and validating numbers.
- 🧩 Various - A collection of utilities for diverse purposes.

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

// Importing specific function using CommonJS syntax
const { uniqueIdentifier } = require('@paunovic/utils')

// Seeing the imported function in action
const ID = uniqueIdentifier()
```

## 🌐 Browser

```ts
// Importing specific function directly from the URL
import { uniqueIdentifier } from 'https://unpkg.com/@paunovic/utils'

// Seeing the imported function in action
const ID = uniqueIdentifier()
```

## License

[MIT](./LICENSE) Copyright © 2024 [Miloš Paunović](https://github.com/MilosPaunovic)
