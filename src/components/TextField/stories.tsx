import { Story, Meta } from '@storybook/react/types-6-0'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    name: 'email'
  }
} as Meta<TextFieldProps>

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />

Default.args = {
  placeholder: 'Placeholder'
}

export const withError: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
)

withError.args = {
  error: true,
  value: 'email@error'
}
