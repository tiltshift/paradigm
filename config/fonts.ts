import { createFont } from 'tamagui'

export const headingFont = createFont({
  family: 'Effra-Regular',
  size: {
    true: 15,
    3: 15,
    4: 15,
    6: 15,
    7: 15,
  },
  weight: {
    3: '500',
    4: '700',
  },
  face: {
    700: { normal: 'InterBold' },
  },
})
