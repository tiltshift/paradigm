// Button.stories.ts|tsx

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: ComponentStoryObj<typeof Button> = {
  render: () => <Button />,
}
