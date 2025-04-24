# paradigm

Tilt/Shift UI library. Web and Native.

## Install

Make sure to install `react-native-reanimated` in the host app. More at: https://tamagui.dev/docs/guides/expo

```
npx expo install react-native-reanimated
```

Update your babel config:

```
/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['../..'],
          alias: {
            // define aliases to shorten the import paths
            paradigm: '../../packages/paradigm',
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
        },
      ],
      [
        '@tamagui/babel-plugin',
        {
          components: ['paradigm', 'tamagui'],
          config: '../../packages/paradigm/config/tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
```

### load fonts

Make sure to call `SplashScreen.preventAutoHideAsync();` globally early while your app is loading:

https://docs.expo.dev/versions/latest/sdk/splash-screen/#splashscreenpreventautohideasync
