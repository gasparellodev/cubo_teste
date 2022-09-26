import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import AccordionProblemHeader, { AccordionProblemHeaderProps } from '.'

const tags = [
  { title: 'Desempenho', score: 1 },
  { title: 'Tendencia', score: 2 },
  { title: 'Impacto a pessoa', score: 3 }
]

const props = {
  onClick: jest.fn(),
  isOpen: false,
  title: 'Title',
  tags: tags as AccordionProblemHeaderProps['tags'],
  priority: 2 as AccordionProblemHeaderProps['priority']
}

describe.skip('AccordionProblemHeader', () => {
  it('should render correctly', () => {
    render(<AccordionProblemHeader {...props} />)

    expect(screen.getByText(/Title/i)).toBeInTheDocument()
    expect(screen.getByTestId('stepper').children).toHaveLength(2)
    expect(props.onClick).not.toHaveBeenCalled()
  })

  it('should render the tags text', () => {
    render(<AccordionProblemHeader {...props} />)

    expect(screen.getByText(/Bom/i)).toBeInTheDocument()
    expect(screen.getByText(/Atenção/i)).toBeInTheDocument()
    expect(screen.getByText(/Crítico/i)).toBeInTheDocument()
  })

  it('should execute the OnClick function', () => {
    render(<AccordionProblemHeader {...props} />)

    userEvent.click(screen.getByText(/Title/i))

    expect(props.onClick).toHaveBeenCalled()
  })
})
