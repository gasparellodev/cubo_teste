/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

import Button from 'components/Button'
import CauseSelector from 'components/CauseSelector'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LeftArrow from 'components/icons/LeftArrow'
import PlusSignIcon from 'components/icons/PlusSignIcon'
import { useProblems } from 'contexts/ProblemsContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAPIClient } from 'services/axios'
import { changeStatusCause } from 'services/change-status-cause'
import { Cause, CauseResponse } from 'services/get-causes'

import * as S from './styles'

type handleChangeStatusParams = {
  status: boolean
  id: number
}

export type CausesProps = CauseResponse

const Cause = ({ causes, problem_name, token, causeInfo }: CausesProps) => {
  const [causeLoading, setCauseLoading] = useState(0)
  const [causeError, setCauseError] = useState(0)
  const { query } = useRouter()
  const { getMapCoordinates } = useProblems()
  const handleChangeStatus = async ({
    id,
    status
  }: handleChangeStatusParams) => {
    const api = getAPIClient()

    setCauseLoading(id)
    setCauseError(0)
    try {
      await changeStatusCause({
        api,
        problemId: Number(query.id),
        causeId: id,
        cityId: 1,
        status
      })
    } catch (error) {
      setCauseError(id)
    } finally {
      setCauseLoading(0)
    }
  }

  useEffect(() => {
    getMapCoordinates({
      cityId: 1,
      problemId: Number(query.id)
    })
  }, [])

  return (
    <>
      {causes ? (
        <>
          {' '}
          <Header />
          <Container>
            <S.Hero>
              <Link href="/diagnostico/causas-dos-problemas">
                <a>
                  <LeftArrow color="white" />
                </a>
              </Link>

              <S.Wrapper>
                <S.WrapperTextHero>
                  <S.Title>
                    Associe causas para <strong>{problem_name}</strong>
                  </S.Title>
                  <S.Description>
                    Baseado nos dados e evidências que você tem, observe as
                    causas possíveis e associe as que mais contribuem para o seu
                    problema.
                  </S.Description>
                </S.WrapperTextHero>
              </S.Wrapper>
            </S.Hero>
          </Container>
          <Container>
            <S.WrapperAccordions>
              {!!causes.length &&
                causes.map(
                  ({ id, status, title, description, is_literature_based }) => {
                    return (
                      <CauseSelector
                        key={id}
                        isChecked={status}
                        detailId={id}
                        loading={causeLoading === id}
                        error={causeError === id}
                        title={title}
                        description={description}
                        isCustom={is_literature_based}
                        token={token}
                        causeInfo={causeInfo}
                        onCheck={(status) =>
                          handleChangeStatus({
                            status,
                            id
                          })
                        }
                      />
                    )
                  }
                )}
            </S.WrapperAccordions>
            <Link
              passHref
              href={`/diagnostico/causas/adicionar-causa/${query.id}`}
            >
              <S.Button style={{ cursor: 'pointer' }} as="a">
                <S.ButtonLabel>
                  <PlusSignIcon />
                  Adicionar causa personalizada
                </S.ButtonLabel>
              </S.Button>
            </Link>
            <S.Hr />
            <S.WrapperButton>
              <Button as="a" href="/diagnostico/causas-dos-problemas">
                Analisar mais problemas
              </Button>
            </S.WrapperButton>
          </Container>
          <Footer />
        </>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}

export default Cause
