import { NavLink } from 'react-router-dom'
import { CheckoutButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationButton>
          <NavLink to="/">
            <MapPin size={22} weight="fill" />
            Santo André - SP
          </NavLink>
        </LocationButton>
        <CheckoutButton>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CheckoutButton>
      </nav>
    </HeaderContainer>
  )
}
