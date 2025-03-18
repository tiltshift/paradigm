import './platform'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'

import { config } from '../config/tamagui.config'

export function ParadigmProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
    </TamaguiProvider>
  )
}
