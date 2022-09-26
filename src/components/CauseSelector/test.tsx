import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import CauseSelector from '.'

const props = {
  title: 'Title',
  description: 'Description',
  loading: false,
  isChecked: false,
  onCheck: jest.fn()
}

describe.skip('CauseSelector', () => {
  it('should render correctly unchecked', () => {
    render(<CauseSelector detailId={0} {...props} />)

    expect(screen.getByText(/Title/i)).toHaveStyleRule('color', '#FFFFFF')
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(props.onCheck).not.toHaveBeenCalled()
  })

  it('should render correctly checked', () => {
    render(<CauseSelector detailId={0} {...props} />)

    const checkbox = screen.getByRole('checkbox')

    userEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(screen.getByText(/Title/i)).toHaveStyleRule('color', '#253245')
    expect(props.onCheck).toHaveBeenCalled()
  })

  it('should show / hide description when the button is clicked', () => {
    render(<CauseSelector detailId={0} {...props} />)

    expect(screen.queryByText(/Description/i)).not.toBeInTheDocument()

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(screen.getByText(/Description/i)).toBeInTheDocument()

    userEvent.click(button)

    expect(screen.queryByText(/Description/i)).not.toBeInTheDocument()
  })

  it('should show a spinner when loading is true', () => {
    render(<CauseSelector detailId={0} {...props} loading />)

    expect(screen.getByTestId('is-loading')).toBeInTheDocument()
  })
})
