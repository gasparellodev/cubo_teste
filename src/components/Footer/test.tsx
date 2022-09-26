import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('Footer', () => {
  it('should render correclty', () => {
    render(<Footer />)

    const heading = screen.getByRole('heading', {
      name: /CUBO/i,
      level: 2
    })

    expect(heading).toBeInTheDocument()
  })
})
