import { Link } from 'react-router-dom'
import Logo from '../../icons_assets/Logo.svg'
import '../header/styles.css'
export default function Header () {
  return (
    <header className='header' role='navigation' aria-label='Main Navigation'>
      <img src={Logo} alt='little lemon logo' />
      <nav>
        <ul>
          <li>
            <Link to='/' tabindex='1'>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/home/about' tabindex='2'>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to='/home/menu' tabindex='3'>
              MENU
            </Link>
          </li>
          <li>
            <Link to='/reserve-table' tabindex='4'>
              RESERVATIONS
            </Link>
          </li>
          <li>
            <Link to='/home/menu' tabindex='5'>
              ORDER ONLINE
            </Link>
          </li>
          <li>
            <Link to='/'>LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
