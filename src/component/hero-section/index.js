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
        <a href='/'>Reserve a Table</a>
      </article>
      <img src={restauranfood} alt='food dish' />
    </section>
  )
}
