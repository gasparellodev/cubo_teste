import { render } from 'utils/test-utils'

import FilterProblems from '.'

describe.skip('<FilterProblems />', () => {
  it('should render correctly', () => {
    const { container } = render(<FilterProblems />)

    expect(container).toHaveTextContent(/Desempenho/i)
    expect(container).toHaveTextContent(/Tendência/i)
    expect(container).toHaveTextContent(/impacto à pessoa/i)
    expect(container).toHaveTextContent(/Nível de Criticidade/i)
  })
})

// TODO: escrever testes para validar comportamento do componente
