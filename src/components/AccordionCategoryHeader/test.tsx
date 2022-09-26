import { render } from 'utils/test-utils'

import AccordionCategoryHeader from '.'

describe.skip('AccordionCategoryHeader', () => {
  it('should render correctly', () => {
    render(
      <AccordionCategoryHeader
        title="Crimes Contra a Pessoa"
        tagsCount={[5, 2]}
        isOpen={false}
      />
    )
  })
})
