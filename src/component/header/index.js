import { Link } from 'react-router-dom'
import Logo from '../../icons_assets/Logo.svg'
import '../header/styles.css'
export default function Header () {
  return (
    <header className='header' role="navigation">
      <img src={Logo} alt='little lemon logo' />
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/home/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/home/menu'>MENU</Link>
          </li>
          <li>
            <Link to='/reserve-table'>RESERVATIONS</Link>
          </li>
          <li>
            <Link to='/home/menu'>ORDER ONLINE</Link>
          </li>
          <li>
            <Link to='/'>LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
