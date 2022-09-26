import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import TextField from '.'

describe('<Checkbox />', () => {
  it('should render with placeholder', () => {
    const { container } = render(<TextField placeholder="Test" />)

    const errorIcon = screen.queryByTestId('error-icon')

    expect(errorIcon).not.toBeInTheDocument()
    expect(screen.getByPlaceholderText(/test/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without placeholder', () => {
    render(<TextField />)

    const input = screen.getByRole('textbox')

    expect(input).not.toHaveAttribute('placeholder')
  })

  it('should render an icon when error props is passed', () => {
    render(<TextField error />)

    const errorIcon = screen.getByTestId('error-icon')

    expect(errorIcon).toBeInTheDocument()
  })

  it('should change its value when typing', async () => {
    render(<TextField />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
    })
  })

  it('should be accessible with tab', () => {
    render(<TextField />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByRole('textbox')).toHaveFocus()
  })
})
