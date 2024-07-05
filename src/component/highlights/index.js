import './styles.css'
import greekSalad from '../../icons_assets/greekSalad.jpg'
import bruchetta from '../../icons_assets/bruchetta.svg'
import lemonDessert from '../../icons_assets/lemonDessert.jpg'
import { FaShippingFast } from 'react-icons/fa'
export default function Highlights () {
  return (
    <section className='Highlights'>
      <article className='section-part-one'>
        <h1>
          <b>This weeks Specials!</b>
        </h1>
        <a href='/'>Online Menu</a>
      </article>
      <article className='section-part-two'>
        <div className='dish-card'>
          <div
            className='dish-image'
            style={{
              background: `url(${greekSalad})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: ' no-repeat'
            }}
          ></div>
          <div className='card-body'>
            <div className='card-body-title'>
              <h2>Greek Salad</h2> <aside>$ 12.99</aside>
            </div>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chicago-style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h3>Order a delivery</h3>
          </div>
        </div>
        <div className='dish-card'>
          <div
            className='dish-image'
            style={{
              background: `url(${bruchetta})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: ' no-repeat'
            }}
          ></div>
          <div className='card-body'>
            <div className='card-body-title'>
              <h2> Bruchetta </h2> <aside>$ 5.99</aside>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <h3>Order a delivery</h3>
          </div>
        </div>
        <div className='dish-card'>
          <div
            className='dish-image'
            style={{
              background: `url(${lemonDessert})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: ' no-repeat'
            }}
          ></div>
          <div className='card-body'>
            <div className='card-body-title'>
              <h2> Lemon dessert</h2> <aside>$ 5.00 </aside>
            </div>
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>

            <h3>
              Order a delivery <FaShippingFast size={15} color='black' />
            </h3>
          </div>
        </div>
      </article>
    </section>
  )
}
