import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ModifyIcon from 'components/icons/ModifyIcon'
import DeleIcon from 'components/icons/DeleIcon'
import ArrowLeft from 'components/icons/ArrowLeft'
import ArrowRight from 'components/icons/ArrowRight'
import * as S from './styles'
import ReturnLink from 'components/ReturnLink'

import ModalForm from 'components/FormController/ModalForm'
import React, { useEffect, useState } from 'react'

const ContratosOptions = () => {
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    !modalOpen
      ? (document.body.style.overflow = 'unset')
      : (document.body.style.overflow = 'hidden')
  }, [modalOpen])

  return (
    <>
      <Header />
      <Container>
        <ReturnLink href="/geoprocessamento/contrato" />
        <S.Wrapper>
          <S.Title>Contratos</S.Title>

          <S.Table>
            <S.TableHead>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <div>
                <p>Ações</p>
              </div>
            </S.TableHead>
            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon
                  onClick={() => {
                    setModalOpen(!modalOpen)
                    console.log('teste')
                  }}
                >
                  <ModifyIcon />
                </S.TableIcon>

                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon
                  onClick={() => {
                    setModalOpen(!modalOpen)
                    console.log('teste')
                  }}
                >
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon
                  onClick={() => {
                    setModalOpen(!modalOpen)
                    console.log('teste')
                  }}
                >
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Nome</p>
              </div>
              <div>
                <p>Número</p>
              </div>
              <div>
                <p>00/00/0000</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon
                  onClick={() => {
                    setModalOpen(!modalOpen)
                    console.log('teste')
                  }}
                >
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DeleIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>
            <S.PaginationLine>
              <S.PaginationBtnWrraper>
                <S.PaginationBtn>
                  <p>1</p>
                </S.PaginationBtn>
                <S.PaginationBtn>
                  <ArrowLeft />
                </S.PaginationBtn>
                <S.PaginationBtn>
                  <ArrowRight />
                </S.PaginationBtn>
              </S.PaginationBtnWrraper>
            </S.PaginationLine>
          </S.Table>
        </S.Wrapper>
      </Container>
      <Footer />
      {modalOpen && (
        <ModalForm
          optionalButtonText="Voltar para Causas"
          mainButtonText="Sim, excluir"
          handleOptionalButtonAction={() => {
            setModalOpen(!modalOpen)
          }}
          handleMainButtonAction={function (e: any): void | React.ReactNode {
            throw new Error('Function not implemented.')
          }}
        >
          <>
            <S.Table>
              <S.TableHead>
                <div>
                  <p>Nome</p>
                </div>
                <div>
                  <p>Número</p>
                </div>
                <div>
                  <p>Data</p>
                </div>
                <div>
                  <p>Ações</p>
                </div>
              </S.TableHead>
              <S.TableLine>
                <div>
                  <p>Nome</p>
                </div>
                <div>
                  <p>Número</p>
                </div>
                <div>
                  <p>00/00/0000</p>
                </div>
                <S.TableIconsWrapper>
                  <S.TableIcon
                    onClick={() => {
                      setModalOpen(!modalOpen)
                      console.log('teste')
                    }}
                  >
                    <ModifyIcon />
                  </S.TableIcon>

                  <S.TableIcon>
                    <DeleIcon />
                  </S.TableIcon>
                </S.TableIconsWrapper>
              </S.TableLine>
            </S.Table>
          </>
        </ModalForm>
      )}
    </>
  )
}

export default ContratosOptions
