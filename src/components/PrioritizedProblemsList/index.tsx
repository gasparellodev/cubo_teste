import PrioritizedProblemItem from 'components/PrioritizedProblemItem'
import PrioritizedProblemsCategory from 'components/PrioritizedProblemsCategory'
import { useProblems } from 'contexts/ProblemsContext'

import * as S from './styles'

const PrioritizedProblemsList = () => {
  const { prioritizedProblems } = useProblems()

  return (
    <S.Wrapper>
      {prioritizedProblems.map((problemCategory) => {
        const problemsCount = problemCategory.prioritized_problems.reduce(
          (acc, problem) => {
            acc.total = acc.total + 1

            if (problem.priority === 3) {
              acc.critical = acc.critical + 1
            }

            return acc
          },
          { total: 0, critical: 0 }
        )

        return (
          <S.CategoryWrapper key={problemCategory.title}>
            <PrioritizedProblemsCategory
              title={problemCategory.title}
              tagsCount={problemsCount}
            />
            {problemCategory.prioritized_problems.map((problem) => (
              <PrioritizedProblemItem
                key={problem.problem_id}
                id={problem.problem_id}
                title={problem.item_name}
                priority={problem.priority as 1 | 2 | 3}
                tagsScore={[
                  problem.metrics[0].score,
                  problem.metrics[1].score,
                  problem.metrics[5].score
                ]}
              />
            ))}
          </S.CategoryWrapper>
        )
      })}
    </S.Wrapper>
  )
}

export default PrioritizedProblemsList
