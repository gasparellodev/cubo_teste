import { render, screen } from 'utils/test-utils'

import AccordionProblemsList from '.'

jest.mock('components/FilterProblems', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock FilterProblems" />
    }
  }
})

jest.mock('components/Accordion', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Accordion">{children}</div>
  }
}))

describe.skip('AccordionProblemsList', () => {
  it('should render correctly', () => {
    render(<AccordionProblemsList groupItems={[]} />)

    expect(screen.getAllByTestId('Mock Accordion')).toHaveLength(6)
    expect(screen.getAllByTestId('Mock FilterProblems')).toHaveLength(2)
  })
})
