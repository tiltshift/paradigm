import type { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-webpack5',
    options: { fastRefresh: true },
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
  },
}

module.exports = config
