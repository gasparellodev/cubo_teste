import { render, screen } from 'utils/test-utils'

import AccordionContent from '.'

const props = {
  maps: 'https://i.imgur.com/Ml4zARd.jpg',
  gathering_text: 'gathering_text',
  gathering: true,
  score_text: 'score_text',
  score: true,
  impact_text: 'impact_text',
  impact: true,
  trend_text: 'trend_text',
  trend: true,
  violence: true,
  violence_text: 'violence_text',
  vulnerability_text: 'vulnerability_text',
  vulnerability: true
}

describe.skip('<AccordionContent />', () => {
  it('renders correctly with all icons active', () => {
    render(<AccordionContent {...props} />)

    expect(screen.getByRole('img', { name: /mapa/i })).toBeInTheDocument()
    expect(screen.getByText(/gathering_text/i)).toBeInTheDocument()
    expect(screen.getByText(/score_text/i)).toBeInTheDocument()
    expect(screen.getByText(/impact_text/i)).toBeInTheDocument()
    expect(screen.getByText(/trend_text/i)).toBeInTheDocument()
    expect(screen.getByText(/violence_text/i)).toBeInTheDocument()
    expect(screen.getByText(/vulnerability_text/i)).toBeInTheDocument()

    screen.getAllByRole('listitem').forEach((item) => {
      expect(item.children[0]).toHaveAttribute('color', '#FF3E32')
    })
  })

  it('renders correctly with all icons disabled', () => {
    const propsDisabled = {
      ...props,
      gathering: false,
      score: false,
      impact: false,
      trend: false,
      violence: false,
      vulnerability: false
    }
    render(<AccordionContent {...propsDisabled} />)

    expect(screen.getByRole('img', { name: /mapa/i })).toBeInTheDocument()
    expect(screen.getByText(/gathering_text/i)).toBeInTheDocument()
    expect(screen.getByText(/score_text/i)).toBeInTheDocument()
    expect(screen.getByText(/impact_text/i)).toBeInTheDocument()
    expect(screen.getByText(/trend_text/i)).toBeInTheDocument()
    expect(screen.getByText(/violence_text/i)).toBeInTheDocument()
    expect(screen.getByText(/vulnerability_text/i)).toBeInTheDocument()

    screen.getAllByRole('listitem').forEach((item) => {
      expect(item.children[0]).toHaveAttribute('color', '#606060')
    })
  })

  it('should not render the map when not passed', () => {
    render(<AccordionContent {...props} maps="" />)

    expect(screen.queryByRole('img', { name: /mapa/i })).not.toBeInTheDocument()
  })

  it('when a text is not passed, it should not be displayed', () => {
    props.gathering_text = ''
    render(<AccordionContent {...props} />)

    expect(screen.queryByText(/gathering_text/i)).not.toBeInTheDocument()
  })
})
