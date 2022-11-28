import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeImage from '../../assets/coffee-home.svg'
import { InfoContainer, ItemLogo, ItemsContainer } from './styles'

export function Home() {
  return (
    <InfoContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </p>
        <ItemsContainer>
          <span>
            <ItemLogo backgroundColor="yellow-dark">
              <ShoppingCart size={16} weight="fill" color="#FFF" />
            </ItemLogo>
            Compra simples e segura
          </span>
          <span>
            <ItemLogo backgroundColor="base-text">
              <Package size={16} weight="fill" color="#FFF" />
            </ItemLogo>
            Embalagem mantém o café intacto
          </span>
          <span>
            <ItemLogo backgroundColor="yellow">
              <Timer size={16} weight="fill" color="#FFF" />
            </ItemLogo>
            Entrega rápida e rastreada
          </span>
          <span>
            <ItemLogo backgroundColor="purple">
              <Coffee size={16} weight="fill" color="#FFF" />
            </ItemLogo>
            O Café chega fresquinho até você
          </span>
        </ItemsContainer>
      </div>
      <img src={coffeeImage} alt="" />
    </InfoContainer>
  )
}
