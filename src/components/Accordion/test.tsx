import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import Accordion from '.'

describe.skip('Accordion', () => {
  it('should start without displaying the content', () => {
    const setCurrentOpen = jest.fn()

    render(
      <Accordion
        id={1}
        currentOpen={0}
        setCurrentOpen={setCurrentOpen}
        header={<header>Header</header>}
      >
        Test
      </Accordion>
    )

    expect(screen.getByText('Header')).toBeVisible()
    expect(screen.queryByText('Test')).not.toBeVisible()
  })

  it('should show the content when clicking on the header', async () => {
    const scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    let currentOpen = 0
    const setCurrentOpen = (id: number) => {
      currentOpen = id
    }

    render(
      <Accordion
        id={1}
        currentOpen={currentOpen}
        setCurrentOpen={setCurrentOpen}
        header={<header>Header</header>}
      >
        Test
      </Accordion>
    )

    userEvent.click(screen.getByText('Header'))

    expect(screen.getByText('Header')).toBeVisible()
    expect(screen.queryByText('Test')).toBeVisible()
    await waitFor(() => expect(scrollIntoViewMock).toHaveBeenCalled())
  })

  it('should close accordion when click header and it is already open', async () => {
    const scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    let currentOpen = 1
    const setCurrentOpen = (id: number) => {
      currentOpen = id
    }

    render(
      <Accordion
        id={1}
        currentOpen={currentOpen}
        setCurrentOpen={setCurrentOpen}
        header={<header>Header</header>}
      >
        Test
      </Accordion>
    )

    userEvent.click(screen.getByText('Header'))

    expect(screen.getByText('Header')).toBeVisible()
    expect(screen.queryByText('Test')).not.toBeVisible()
    await waitFor(() => expect(scrollIntoViewMock).toHaveBeenCalled())
  })

  it('should not scroll when there are no children', async () => {
    const scrollIntoViewMock = jest.fn()
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock

    let currentOpen = 1
    const setCurrentOpen = (id: number) => {
      currentOpen = id
    }

    render(
      <Accordion
        id={1}
        currentOpen={currentOpen}
        setCurrentOpen={setCurrentOpen}
        header={<header>Header</header>}
      />
    )

    userEvent.click(screen.getByText('Header'))

    expect(screen.getByText('Header')).toBeVisible()
    expect(screen.queryByText('Test')).not.toBeInTheDocument()
    await waitFor(() => expect(scrollIntoViewMock).not.toHaveBeenCalled())
  })
})
