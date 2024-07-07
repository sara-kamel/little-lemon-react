import '../footer/styles.css'
import Logo from '../../icons_assets/Logo.svg'
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
export default function Footer () {
  return (
    <section className='footer'>
      <article>
        <img src={Logo} alt='logo' />
      </article>
      <article>
        <h1>Navigation</h1>
        <ul>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <Link to='/home/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/home/menu'>MENU</Link>
          </li>
          <li>
            <Link to='/home/reserve'>RESERVATIONS</Link>
          </li>
          <li>
            <Link to='/home/menu'>ORDER ONLINE</Link>
          </li>
          <li>
            <Link to='/'> LOGIN</Link>
          </li>
        </ul>
      </article>
      <article>
        <h1>Contact</h1>
        <ul>
          <li>(333)-(333)-(3333)</li>
          <li>15 SSS ROAD CA</li>
          <li>90430</li>
        </ul>
      </article>
      <article>
        <h1>Social Media</h1>
        <ul className='social'>
          <li>
            <Link>
              <TiSocialFacebook />
            </Link>
          </li>
          <li>
            <Link>
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link>
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </article>
    </section>
  )
}
