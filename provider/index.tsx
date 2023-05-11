import { useColorScheme } from 'react-native'

import { TamaguiProvider, TamaguiProviderProps, config } from '../config'

export function ParadigmProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()

  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
