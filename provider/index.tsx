import './platform'

import { NunitoSans_600SemiBold, NunitoSans_800ExtraBold, useFonts } from '@expo-google-fonts/nunito-sans'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'

import { tamaguiConfig } from '../config/tamagui.config'

export function ParadigmProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()

  const [loaded, error] = useFonts({
    NunitoSans_600SemiBold,
    NunitoSans_800ExtraBold,
  })

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <TamaguiProvider
      config={tamaguiConfig}
      disableInjectCSS
      defaultTheme={colorScheme === 'dark' ? 'dark_blue' : 'light_blue'}
      {...rest}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
    </TamaguiProvider>
  )
}
