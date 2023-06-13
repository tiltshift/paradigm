import * as Font from 'expo-font'

// This function loads everything we need before showing the user the app.
export const loadResources = async () => {
  await Promise.all([
    // Asset.loadAsync([
    //   require('./image/path/here'),
    // ]),
    Font.loadAsync({
      'Effra-Regular': require(`./fonts/Effra.ttf`),
      'Effra-Bold': require(`./fonts/Effra-Bold.ttf`),
    }),
  ])
}
