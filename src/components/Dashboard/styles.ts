import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
  }
`

export const OccurenceCard = styled.div``

export const InformationCollected = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 4.8rem;
  div {
    max-width: 250px;
  }
`
export const TaxCard = styled.div``

export const RateCard = styled.div`
  border-left: 1px solid #ffffff;
  padding-left: 7.8rem;
`

export const TendencyCard = styled.div``

interface TagTendencyCardProps {
  status?: boolean
  color?: string
}

export const TagTendencyCard: TagTendencyCardProps | any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 1.6rem;
  margin-bottom: 0.8rem;
  span {
    font-family: 'Poppins';
    margin-bottom: 5px;
    font-weight: 600;
    line-height: 1.2rem;
    color: ${(props: any) =>
      props.status ? (props.isGood ? props.color : '#FF185D') : '#555555'};
    border-bottom: ${(props: any) =>
      props.status
        ? props.isGood
          ? `2px solid ${props.color}`
          : `2px solid ${'#FF185D'}`
        : 'none'};
  }
`

export const TagTendencyCardStable: TagTendencyCardProps | any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 1.6rem;
  margin-bottom: 0.8rem;
  span {
    font-family: 'Poppins';
    margin-bottom: 5px;
    font-weight: 600;
    line-height: 1.2rem;
    color: ${(props: any) => (props.status ? props.color : '#555555')};
    border-bottom: ${(props: any) =>
      props.status ? `2px solid ${props.color}` : `2px solid ${'#555555'}`};
  }
`

export const TagTendencyCardDown: TagTendencyCardProps | any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 1.6rem;
  margin-bottom: 0.8rem;
  span {
    font-family: 'Poppins';
    margin-bottom: 5px;
    font-weight: 600;
    line-height: 1.2rem;
    color: ${(props: any) =>
      props.status ? (props.isGood ? '#FF185D' : props.color) : '#555555'};
    border-bottom: ${(props: any) =>
      props.status
        ? props.isGood
          ? `2px solid ${'#FF185D'}`
          : `2px solid ${props.color}`
        : 'none'};
  }
`

export const FirstInfoCard = styled.h1`
  font-size: 3.2rem;
  line-height: 3.2rem;
  font-weight: 600;
  color: '#FFFFFF';
  margin-bottom: 0.8rem;
`

export const SecondInfoCard = styled.h3`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 600;
  color: '#FFFFFF';
  margin-bottom: 0.8rem;
`

export const PeriodInfoCard = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: '#FFFFFF';
  margin-bottom: 0.4rem;
  white-space: nowrap;
`
