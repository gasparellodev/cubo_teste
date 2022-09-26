import styled from 'styled-components'

export const Container = styled.div`
  background: #253245;
  margin-top: 6.4rem;
  margin-bottom: 5rem;
  border-radius: 8px;

  .apexcharts-tooltip {
    background: #f3f3f3;
    color: #253245;
  }
`

export const ContainerLegendOfChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 4rem;
`

export const LegendsOfChart = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerTagOfLegends = styled.div`
  display: flex;
  gap: 6rem;
  margin-bottom: 2rem;

  font-family: 'Poppins';
  font-size: 1.4rem;
  line-height: 1.4rem;
`

export const ButtonOfDownload = styled.button`
  text-decoration: none;
  background: transparent;
  color: #00add2;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #00add2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;

  gap: 1rem;

  a {
    text-decoration: none;
    color: #00add2;
  }
`
export const FontOfData = styled.div`
  font-family: 'Poppins';
  font-size: 1.2rem;
  line-height: 1.2rem;
`

export const ContainerOfTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
