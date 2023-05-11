import type { StorybookConfig } from '@storybook/core-common'
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: false,
    },
  },
  core: {},
  typescript: {
    check: false,
  },
  // @ts-ignore this isn't correct in the types
  reactOptions: {
    fastRefresh: false,
  },
  docs: {
    autodocs: true,
  },
}
module.exports = config
