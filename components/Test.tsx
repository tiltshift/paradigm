import { styled, YStack } from 'tamagui'

export const Test = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: '#ff654d',

  variants: {
    blue: {
      true: {
        backgroundColor: 'rgb(255,91.8,63.75)',
      },
    },
  } as const,
})
