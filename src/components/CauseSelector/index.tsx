/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import Checkbox from 'components/CheckBox'
import ModalForm from 'components/FormController/ModalForm'
import BookIcon from 'components/icons/BookIcon'
import CustomIcon from 'components/icons/CustomIcon'
import EditIcon from 'components/icons/EditIcon'
import TrashCanIcon from 'components/icons/TrashCanIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import * as S from './styles'
import { Hr } from 'components/FormController/AddCauseForm/styles'

type AccordionCauseProps = {
  detailId: number
  title: string
  description: string
  isChecked?: boolean
  loading?: boolean
  error?: boolean
  token: any
  isCustom: boolean
  causeInfo: any
  onCheck?: (status: boolean) => void
}

export type DetailCauseItemProps = {
  id: number
}

const AccordionCause = ({
  detailId,
  title,
  isChecked = false,
  loading = false,
  onCheck,
  error,
  isCustom,
  token
}: AccordionCauseProps) => {
  const [checked, setChecked] = useState(isChecked)
  const { query } = useRouter()
  useEffect(() => {
    if (error) setChecked((oldState) => !oldState)
  }, [error])

  const onChange = (status: boolean) => {
    setChecked(status)

    onCheck && onCheck(status)
  }

  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    !modalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [modalOpen])

  const handleDelete = async () => {
    const baseURL = process.env.NEXT_PUBLIC_API_URL

    await fetch(`${baseURL}/city/${1}/cause/${detailId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
  }

  return (
    <>
      <S.Wrapper>
        <S.TopRowWrapper>
          <S.Title>{title}</S.Title>
          {loading ? (
            <S.Spinner data-testid="is-loading" />
          ) : (
            <Checkbox isChecked={checked} onCheck={onChange} />
          )}
        </S.TopRowWrapper>
        <S.BottomRowWrapper>
          <S.CauseTypeWrapper>
            <S.CauseTypeText>
              {!isCustom ? (
                <>
                  {' '}
                  <CustomIcon /> <p>Causa personalizada</p>
                </>
              ) : (
                <>
                  {' '}
                  <BookIcon /> <p>Causa da literatura</p>
                </>
              )}
            </S.CauseTypeText>
          </S.CauseTypeWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              gap: 15
            }}
          >
            {!isCustom && (
              <>
                <S.Button
                  onClick={() => {
                    setModalOpen(!modalOpen)
                  }}
                >
                  <TrashCanIcon />
                </S.Button>

                <Link
                  passHref
                  href={{
                    pathname: `/diagnostico/causas/editar-causa/${query.id}/${detailId}`,
                    query: { problemId: String(query.id) }
                  }}
                >
                  <S.Button>
                    <EditIcon />
                  </S.Button>
                </Link>
              </>
            )}
            <Link
              passHref
              href={{
                pathname: `/diagnostico/causas/detalhes/${query.id}/${[
                  detailId
                ]}`
              }}
            >
              <S.Button>
                <S.ButtonLabel>Ver detalhes</S.ButtonLabel>
              </S.Button>
            </Link>
          </div>
        </S.BottomRowWrapper>
      </S.Wrapper>
      {modalOpen && (
        <ModalForm
          optionalButtonText="Voltar para Causas"
          mainButtonText="Sim, excluir"
          handleMainButtonAction={() => {
            setModalOpen(!modalOpen)
            handleDelete()
            location.href = `/diagnostico/causas/${query.id}`
          }}
          handleOptionalButtonAction={() => {
            setModalOpen(!modalOpen)
          }}
        >
          <>
            <h1 style={{ fontSize: 20, fontWeight: 600 }}>
              Tem certeza que deseja excluir esta causa?
            </h1>
            <h3 style={{ fontSize: 16, fontWeight: 400, paddingTop: 15 }}>
              {title}
            </h3>
            <Hr style={{ marginTop: '20px' }} />
            <p style={{ fontSize: 14, fontWeight: 400 }}>
              Ao efetuar a exclusão, sua causa será retirada da sua listagem,
              impedindo a seleção futura desta mesma. Lembre-se, não será
              possível recuperá-la novamente.
            </p>
          </>
        </ModalForm>
      )}
    </>
  )
}

export default AccordionCause
