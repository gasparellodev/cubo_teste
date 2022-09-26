import Accordion from 'components/Accordion'
import AccordionContent from 'components/AccordionContent'
import AccordionProblemHeader from 'components/AccordionProblemHeader'
import { useProblems } from 'contexts/ProblemsContext'
import { CityProblemGroupItemModel } from 'services/city-problems'

type AccordionProblemsListProps = {
  groupItems: CityProblemGroupItemModel[]
}

const AccordionProblemsList = ({ groupItems }: AccordionProblemsListProps) => {
  const { currentProblemOpen, setCurrentProblemOpen } = useProblems()

  const handleClickCurrentProblemOpen = (id: number) => {
    setCurrentProblemOpen(id)
  }

  return (
    <>
      {groupItems.length > 1 ? (
        groupItems.map((groupItem) => {
          return (
            <Accordion
              key={groupItem.item_name}
              id={groupItem.problem_id}
              currentOpen={currentProblemOpen}
              setCurrentOpen={handleClickCurrentProblemOpen as any}
              header={
                <AccordionProblemHeader
                  title={groupItem.item_name}
                  tagsScore={[
                    groupItem.metrics[0].score,
                    groupItem.metrics[1].score,
                    groupItem.metrics[5].score
                  ]}
                  showTags={currentProblemOpen === 0}
                  priority={groupItem.priority as 1 | 2 | 3}
                  isOpen={currentProblemOpen === groupItem.problem_id}
                />
              }
            >
              <AccordionContent
                id={groupItem.problem_id}
                isPrioritized={groupItem.is_prioritized}
                metrics={groupItem.metrics}
                problem_analysis={groupItem.problem_analysis}
              />
            </Accordion>
          )
        })
      ) : (
        <AccordionContent
          id={groupItems[0].problem_id}
          isPrioritized={groupItems[0].is_prioritized}
          metrics={groupItems[0].metrics}
          problem_analysis={groupItems[0].problem_analysis}
        />
      )}
    </>
  )
}

export default AccordionProblemsList
