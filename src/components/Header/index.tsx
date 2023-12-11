// Styling Imports
import { HeaderContainer, HeaderContent } from './styles'

// Strategic Imports
import { NavLink } from 'react-router-dom'

// Image Imports
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  )
}
