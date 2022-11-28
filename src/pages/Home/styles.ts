import styled from 'styled-components'
import homeBackground from '../../assets/Background.svg'

export const InfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 160px;
  padding-right: 160px;
  height: 34rem;
  gap: 56px;

  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  div {
    width: 36rem;

    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 16px;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 231px 294px;
  gap: 20px 40px;
  margin-top: 67px;

  span {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export type LogoColor = 'yellow' | 'yellow-dark' | 'base-text' | 'purple'

interface ItemLogoProps {
  backgroundColor: LogoColor
}

export const ItemLogo = styled.span<ItemLogoProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme[props.backgroundColor]};
`
