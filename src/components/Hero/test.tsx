import { render, screen } from 'utils/test-utils'

import Hero from '.'

describe.skip('Hero', () => {
  it('should render correclty', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', {
      name: /Priorize problemas /i,
      level: 1
    })

    expect(heading).toBeInTheDocument()
    expect(
      screen.getByText(/Navegue por diversos problemas/i)
    ).toBeInTheDocument()
  })
})
