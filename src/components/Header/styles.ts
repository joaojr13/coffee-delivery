import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 10rem;
  padding: 2rem 0;

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
