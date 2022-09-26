import { render, screen } from 'utils/test-utils'

import theme from 'styles/theme'

import CriticalityLevel from '.'

describe('<CriticalityLevel />', () => {
  it('should render the component with level 1', () => {
    render(<CriticalityLevel level={1} />)

    const stepper = screen.getByTestId('stepper').children

    expect(screen.getByTestId('stepper').children).toHaveLength(1)
    expect(stepper[0]).toHaveStyleRule(
      'background',
      theme.colors.feedback.positivePure
    )
  })

  it('should render the component with level 2', () => {
    render(<CriticalityLevel level={2} />)

    const stepper = screen.getByTestId('stepper').children

    expect(stepper).toHaveLength(2)
    expect(stepper[0]).toHaveStyleRule(
      'background',
      theme.colors.feedback.mediumPure
    )
  })

  it('should render the component with level 3', () => {
    render(<CriticalityLevel level={3} />)

    const stepper = screen.getByTestId('stepper').children

    expect(stepper).toHaveLength(3)
    expect(stepper[0]).toHaveStyleRule(
      'background',
      theme.colors.feedback.negativePure
    )
  })

  it('if level is more than 3 it must have the behavior of level 3', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<CriticalityLevel level={4} />)

    const stepper = screen.getByTestId('stepper').children

    expect(stepper).toHaveLength(3)
    expect(stepper[0]).toHaveStyleRule(
      'background',
      theme.colors.feedback.negativePure
    )
  })

  it('if level is less than 1 it must behave like level 1', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<CriticalityLevel level={0} />)

    const stepper = screen.getByTestId('stepper').children

    expect(screen.getByTestId('stepper').children).toHaveLength(1)
    expect(stepper[0]).toHaveStyleRule(
      'background',
      theme.colors.feedback.positivePure
    )
  })
})
