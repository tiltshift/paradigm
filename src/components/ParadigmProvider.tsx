import React from 'react'
import { TamaguiProvider } from 'tamagui'

import config from '../../tamagui.config'
export const ParadigmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>
}
