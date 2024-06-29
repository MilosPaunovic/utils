import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './test/e2e',

  fullyParallel: true,

  reporter: 'list',

  use: {
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },
  ],
})
