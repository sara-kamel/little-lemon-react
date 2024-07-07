import '../footer/styles.css'
import Logo from '../../icons_assets/Logo.svg'
import { Link } from 'react-router-dom'
export default function Footer () {
  return (
    <section className='footer'>
      <article>
        <img src={Logo} alt='logo' />
      </article>
      <article>
        <h1>Navigation</h1>
        <a href='#'>Home</a>
        <Link to='/home/about'>about</Link>
        <Link to='/home/menu'>Menu</Link>
        <Link to='/home/reserve'>RESERVATIONS</Link>
        <Link to='/home/menu'>ORDER ONLINE</Link>
        <Link to='/'> LOGIN</Link>
      </article>
      <article>
        <h1>Contact</h1>
        <Link to='/'></Link>
        <Link to='/'></Link>
        <Link to='/'></Link>
      </article>
      <article>
        <h1>Social Media</h1>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </article>
    </section>
  )
}
