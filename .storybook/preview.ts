import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'
import 'tailwindcss/components.css'
import 'tailwindcss/base.css'
import 'tailwindcss/utilities.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
