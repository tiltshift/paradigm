/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
}
export default config
