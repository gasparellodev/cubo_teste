import { render, screen } from 'utils/test-utils'

import CityProblems from '.'

jest.mock('components/Hero', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Hero"></div>
    }
  }
})

jest.mock('components/NavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock NavBar"></div>
    }
  }
})

jest.mock('components/AccordionProblemsList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock AccordionProblemsList"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe.skip('<CityProblems />', () => {
  it('should render correctly all components', () => {
    render(<CityProblems />)

    expect(screen.getByTestId(/mock Hero/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock NavBar/i)).toHaveLength(2)
    expect(screen.getByTestId(/mock Footer/i)).toBeInTheDocument()
    expect(
      screen.getByTestId(/mock AccordionProblemsList/i)
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock IconsSummary/i)).toBeInTheDocument()
  })
})
