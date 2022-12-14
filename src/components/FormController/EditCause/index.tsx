import React, { ChangeEvent, useEffect, useState } from 'react'

import Button from 'components/Button'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LeftArrow from 'components/icons/LeftArrow'
import Link from 'next/link'

import * as S from './styles'

import { limitChar, placeHolders } from '../auxiliarText'
import ModalForm from '../ModalForm'

export default function EditCause(Causa?: any) {
  const initialFormData = Object({
    cause_name: Causa.title ?? '',
    cause_evidence: Causa.evidence ?? '',
    cause_description: Causa.description ?? ''
  })

  const [counterTitleChar, setCounterTitleChar] = useState(Causa.title.length)
  const [counterJustificativeChar, setCounterJustificativeChar] = useState(
    Causa.title.length
  )
  const [counterEvidenceChar, setCounterEvidenceChar] = useState(
    Causa.title.length
  )

  const [title, setTitle] = useState(Causa.title)
  const [justificative, setJustificative] = useState(Causa.description)
  const [evidence, setEvidence] = useState(Causa.evidence)

  const [formData, updateFormData] = useState(initialFormData)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    })
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const baseURL = process.env.NEXT_PUBLIC_API_URL

    const response = await fetch(`${baseURL}/city/${1}/cause/${Causa.id}`, {
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${Causa.token}`,
        'Content-Type': 'application/json'
      },
      method: 'PATCH'
    })
    !Causa.is_literature_based && response
  }

  const [modalOpen, setModalOpen] = useState(false)
  const [feedBackModalOpen, setFeedBackModalOpen] = useState(false)
  const [DiscardModalOpen, setDiscardModalOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [blockedModalOpen, setblockedModalOpen] = useState(
    Causa.is_literature_based
  )

  useEffect(() => {
    !modalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [modalOpen])

  useEffect(() => {
    !DiscardModalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [DiscardModalOpen])

  useEffect(() => {
    !feedBackModalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [feedBackModalOpen])

  useEffect(() => {
    !blockedModalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [blockedModalOpen])

  return (
    <Container>
      {blockedModalOpen && (
        <ModalForm
          handleMainButtonAction={function () {
            location.href = `/diagnostico/causas/${Causa.problemId}`
          }}
          mainButtonText="Voltar para causas"
        >
          <h1>Ops...</h1>
          <p>Est?? causa ?? de acervo datado e portanto n??o pode ser editada.</p>
        </ModalForm>
      )}
      <Header />
      <Link href={`/diagnostico/causas/${Causa.problemId}`}>
        <a style={{ margin: '20px 0' }}>
          <LeftArrow color="white" />
        </a>
      </Link>
      <S.WrapperTextHero>
        <S.Title>Fa??a a edi????o da sua causa</S.Title>
        <S.Description>
          A edi????o de uma causa personalizada de fora da literatura ?? muito
          importante dado o contexto de cada municipio. Aqui, na edi????o dessa
          causa, busque ao m??ximo preenche-la com detalhes e informa????es que
          corroborem a relev??ncia dessa causa sob o contexto do problema que se
          procura associar.
        </S.Description>
      </S.WrapperTextHero>

      <S.Form>
        <S.Wrapper>
          <S.Label>Edite o t??tulo da sua causa</S.Label>
          <S.Input
            name="cause_name"
            placeholder={placeHolders.title}
            onChange={(e) => {
              setTitle(e.target.value)
              handleChange(e)
              setCounterTitleChar(e.currentTarget.value.length)
            }}
            value={title}
            maxLength={limitChar.title}
          />
          <S.AssistentWrapper>
            <p>
              {counterTitleChar
                ? `${counterTitleChar}/${limitChar.title}`
                : `Insira at?? ${limitChar.title} caracteres`}
            </p>
            <legend>{!counterTitleChar && '* Obrigat??rio'}</legend>
          </S.AssistentWrapper>
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Edite a justificativa da sua causa</S.Label>
          <S.Input
            name="cause_description"
            placeholder={placeHolders.justificative}
            onChange={(e) => {
              setJustificative(e.target.value)
              handleChange(e)
              setCounterJustificativeChar(e.currentTarget.value.length)
            }}
            value={justificative}
            maxLength={limitChar.justificative}
          />
          <S.AssistentWrapper>
            <p>
              {counterJustificativeChar
                ? `${counterJustificativeChar}/${limitChar.justificative}`
                : `Insira at?? ${limitChar.justificative} caracteres`}
            </p>

            <legend>{!counterJustificativeChar && '* Obrigat??rio'}</legend>
          </S.AssistentWrapper>
        </S.Wrapper>

        <S.Wrapper>
          <S.Label>Edite a evid??ncia da sua causa</S.Label>
          <S.Input
            name="cause_evidence"
            placeholder={placeHolders.evidence}
            onChange={(e) => {
              setEvidence(e.target.value)
              handleChange(e)
              setCounterEvidenceChar(e.currentTarget.value.length)
            }}
            value={evidence}
            maxLength={limitChar.evidence}
          />
          <S.AssistentWrapper>
            <p>
              {counterEvidenceChar
                ? `${counterEvidenceChar}/${limitChar.evidence}`
                : `Insira at?? ${limitChar.evidence} caracteres`}
            </p>
            <legend style={{ color: '#fff' }}>
              {!counterEvidenceChar && 'Opcional'}
            </legend>
          </S.AssistentWrapper>
        </S.Wrapper>
      </S.Form>

      <S.Hr />
      <S.WrapperButton>
        <Button
          onClick={() => {
            setModalOpen(!modalOpen)
          }}
          disabled={!counterTitleChar || !counterJustificativeChar}
        >
          Salvar causa
        </Button>
        <a onClick={() => setDiscardModalOpen(!DiscardModalOpen)}>
          Descartar altera????es
        </a>
      </S.WrapperButton>

      {DiscardModalOpen && (
        <ModalForm
          optionalButtonText="Continuar editando"
          handleOptionalButtonAction={() =>
            setDiscardModalOpen(!DiscardModalOpen)
          }
          mainButtonText="Sim, descartar"
          handleMainButtonAction={function () {
            setDiscardModalOpen(!DiscardModalOpen)
            location.href = `/diagnostico/causas/${Causa.problemId}`
          }}
        >
          Deseja descartar as altera????es feitas na causa selecionada?
        </ModalForm>
      )}

      {modalOpen && (
        <ModalForm
          optionalButtonText="Voltar para edi????o"
          handleOptionalButtonAction={() => setModalOpen(!modalOpen)}
          mainButtonText="Sim, salvar"
          handleMainButtonAction={(e: any) => {
            handleSubmit(e)
            setModalOpen(!modalOpen)
            setFeedBackModalOpen(!feedBackModalOpen)
          }}
        >
          Deseja salvar as altera????es feitas na causa selecionada?
        </ModalForm>
      )}

      {feedBackModalOpen && (
        <ModalForm
          mainButtonText="Voltar para Causas"
          handleMainButtonAction={function () {
            setFeedBackModalOpen(!feedBackModalOpen)
            location.href = `/diagnostico/causas/${Causa.problemId}`
          }}
        >
          Altera????es salvas com sucesso.
        </ModalForm>
      )}
      <Footer />
    </Container>
  )
}
