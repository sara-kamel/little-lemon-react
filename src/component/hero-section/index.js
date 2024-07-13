import { Link } from 'react-router-dom'
import restauranfood from '../../icons_assets/restauranfood.jpg'
import '../hero-section/styles.css'
export default function HeroSection () {
  return (
    <section className='hero-section'>
      <article>
        <h1>Little Lemon </h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to='/reserve-table'>Reserve a Table</Link>
      </article>
      <img src={restauranfood} alt='food dish' />
    </section>
  )
}
