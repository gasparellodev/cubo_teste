import { useState } from 'react'

import Accordion from 'components/Accordion'
import AccordionCategoryHeader from 'components/AccordionCategoryHeader'
import AccordionGroupList from 'components/AccordionGroupList'
import { useProblems } from 'contexts/ProblemsContext'

const AccordionCategoryList = () => {
  const { cityProblemsFiltered, setCurrentGroupOpen, setCurrentProblemOpen } =
    useProblems()

  const [currentCategoryOpen, setCurrentCategoryOpen] = useState(0)

  const handleClickCurrentCategoryOpen = (id: number) => {
    setCurrentCategoryOpen(id)
    setCurrentGroupOpen('')
    setCurrentProblemOpen(0)
  }

  return (
    <>
      {!!cityProblemsFiltered.length &&
        cityProblemsFiltered.map((problemCategory, index) => {
          const problemsCount = problemCategory.groups.reduce(
            (acc, { group_items }) => {
              group_items.forEach((group) => {
                acc.total = acc.total + 1

                if (group.priority === 3) {
                  acc.critical = acc.critical + 1
                }
              })

              return acc
            },
            { total: 0, critical: 0 }
          )

          return (
            <Accordion
              key={index}
              id={index + 1}
              currentOpen={currentCategoryOpen}
              setCurrentOpen={handleClickCurrentCategoryOpen as any}
              header={
                <AccordionCategoryHeader
                  title={problemCategory.category}
                  tagsCount={problemsCount}
                  isOpen={currentCategoryOpen === index + 1}
                />
              }
            >
              <AccordionGroupList groups={problemCategory.groups} />
            </Accordion>
          )
        })}
    </>
  )
}

export default AccordionCategoryList
