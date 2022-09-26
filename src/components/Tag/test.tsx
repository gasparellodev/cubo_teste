import { render, screen } from 'utils/test-utils'

import Tag from '.'

describe.skip('<Tag />', () => {
  it('should render correctly when the score is 1', () => {
    render(<Tag score={1} />)

    expect(screen.getByText(/Bom/i)).toHaveStyleRule('color', '#03E0B8')
  })

  it('should render correctly when the score is 2', () => {
    render(<Tag score={2} />)

    expect(screen.getByText(/Atenção/i)).toHaveStyleRule('color', '#FF5C00')
  })

  it('should render correctly when the score is 3', () => {
    render(<Tag score={3} />)

    expect(screen.getByText(/Crítico/i)).toHaveStyleRule('color', '#FF185D')
  })

  it('should render correnctly whith the variant problem, count = 0 and word crítico', () => {
    render(<Tag variant="problem" count={0} word="crítico" />)

    expect(screen.getByText(0)).toBeInTheDocument()

    expect(screen.getByText(/problemas críticos/i)).toHaveStyleRule(
      'color',
      '#03E0B8'
    )
  })

  it('should render correnctly whith the variant problem, count = 1 and word crítico', () => {
    render(<Tag variant="problem" count={1} word="crítico" />)

    expect(screen.getByText(1)).toBeInTheDocument()

    expect(screen.getByText(/problema crítico/i)).toHaveStyleRule(
      'color',
      '#FF185D'
    )
  })

  it('should render correnctly whith the variant problem, count = 1 and word relacionado', () => {
    render(<Tag variant="problem" count={1} word="relacionado" />)

    expect(screen.getByText(1)).toBeInTheDocument()

    expect(screen.getByText(/problema relacionado/i)).toHaveStyleRule(
      'color',
      '#FFFFFF'
    )
  })

  it('should render correnctly whith the variant problem, count = 2 and word relacionado', () => {
    render(<Tag variant="problem" count={2} word="relacionado" />)

    expect(screen.getByText(2)).toBeInTheDocument()

    expect(screen.getByText(/problemas relacionados/i)).toHaveStyleRule(
      'color',
      '#FFFFFF'
    )
  })
})
