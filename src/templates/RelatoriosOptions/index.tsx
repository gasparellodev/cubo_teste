import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import WarningIcon from 'components/icons/WarningIcon'
import ViewIcon from 'components/icons/ViewIcon'
import ModifyIcon from 'components/icons/ModifyIcon'
import DownloadIcon from 'components/icons/DownloadIcon'
import ArrowLeft from 'components/icons/ArrowLeft'
import ArrowRight from 'components/icons/ArrowRight'
import * as S from './styles'

const RelatoriosOptions = () => {
  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.Title>Relatórios</S.Title>
          <S.SearchRow>
            <div>
              <WarningIcon></WarningIcon>
            </div>
            <div>
              <WarningIcon></WarningIcon>
            </div>
          </S.SearchRow>
          <S.Table>
            <S.TableHead>
              <div>
                <p>Categoria</p>
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
                <p>Categoria</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ViewIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DownloadIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>
            <S.TableLine>
              <div>
                <p>Categoria</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ViewIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DownloadIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>
            <S.TableLine>
              <div>
                <p>Categoria</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ViewIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DownloadIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>
            <S.TableLine>
              <div>
                <p>Categoria</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ViewIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DownloadIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Categoria</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ViewIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DownloadIcon />
                </S.TableIcon>
              </S.TableIconsWrapper>
            </S.TableLine>

            <S.TableLine>
              <div>
                <p>Categoria</p>
              </div>
              <div>
                <p>Data</p>
              </div>
              <S.TableIconsWrapper>
                <S.TableIcon>
                  <ViewIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <ModifyIcon />
                </S.TableIcon>
                <S.TableIcon>
                  <DownloadIcon />
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
    </>
  )
}

export default RelatoriosOptions
