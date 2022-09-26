import Accordion from 'components/Accordion'
import AccordionProblemHeader from 'components/AccordionProblemHeader'
import AccordionProblemsList from 'components/AccordionProblemsList'
import FilterProblems from 'components/FilterProblems'
import { useProblems } from 'contexts/ProblemsContext'
import { CityProblemGroupsModel } from 'services/city-problems'

import * as S from './styles'

type AccordionGroupListProps = {
  groups: CityProblemGroupsModel[]
}

const AccordionGroupList = ({ groups }: AccordionGroupListProps) => {
  const {
    currentGroupOpen,
    setCurrentGroupOpen,
    setCurrentProblemOpen,
    isAccordionContentOpen
  } = useProblems()

  const handleClickCurrentGroupOpen = (id: string) => {
    setCurrentGroupOpen(id)
    setCurrentProblemOpen(0)
  }

  return (
    <>
      <S.TopHr />
      <FilterProblems showFilters={!isAccordionContentOpen} />

      {groups.map((problemGroup) => {
        return (
          <Accordion
            key={problemGroup.group_name}
            id={problemGroup.group_name}
            currentOpen={currentGroupOpen}
            setCurrentOpen={handleClickCurrentGroupOpen as any}
            header={
              <AccordionProblemHeader
                title={problemGroup.group_name}
                groupCount={problemGroup.group_items.length}
                tagsScore={[
                  problemGroup.metrics[0].score,
                  problemGroup.metrics[1].score,
                  problemGroup.metrics[5].score
                ]}
                showTags={currentGroupOpen === ''}
                priority={problemGroup.priority as 1 | 2 | 3}
                isOpen={currentGroupOpen === problemGroup.group_name}
              />
            }
          >
            <AccordionProblemsList groupItems={problemGroup.group_items} />
          </Accordion>
        )
      })}

      <S.BottomHr />
    </>
  )
}

export default AccordionGroupList
