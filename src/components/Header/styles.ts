import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.background};

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      gap: 0.75rem;

      a {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0.5rem;
        border-radius: 6px;
        gap: 4px;

        text-decoration: none;
      }
    }
  }
`
export const LocationButton = styled.div`
  a {
    color: ${(props) => props.theme['purple-dark']};

    background: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const CheckoutButton = styled.div`
  a {
    background: ${(props) => props.theme['yellow-light']};

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
