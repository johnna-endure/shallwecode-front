import type { Preview } from '@storybook/react'
import '../src/tailwind.css'
import { withRouter } from 'storybook-addon-react-router-v6'

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
