import type { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
  },
  // @ts-ignore this isn't correct in the types
  reactOptions: {
    fastRefresh: false,
  },
}

module.exports = config
