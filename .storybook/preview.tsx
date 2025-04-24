import type { Preview } from '@storybook/react'

import { ParadigmProvider } from '../provider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ParadigmProvider>
        <Story />
      </ParadigmProvider>
    ),
  ],
}

export default preview
