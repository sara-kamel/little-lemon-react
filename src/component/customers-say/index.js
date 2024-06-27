import './styles.css';
import greekSalad from '../../icons_assets/greekSalad.jpg';
import bruchetta from '../../icons_assets/bruchetta.svg';
import lemonDessert from '../../icons_assets/lemonDessert.jpg';
export default function CustomersSay() {
  return (
    <section className="customersS-say">
      <article className="section-part-one">
        <h1>
          <b>This weeks Specials!</b>
        </h1>
        <a href="/">Online Menu</a>
      </article>
      <article className="section-part-two">
        <div className="dish-card">
          <img src={greekSalad} alt="greek salad" />
          <div className="card-body">
            <h2>Greek Salad</h2> <span>$ 12.99</span>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta
              cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <h3>Order a delivery</h3>
          </div>
        </div>
        <div className="dish-card">
          <img src={bruchetta} alt="bruchette" />
          <div className="card-body">
            <h2> Bruchetta </h2> <span>$ 5.99</span>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and
              seasoned with salt and olive oil.
            </p>
            <h3>Order a delivery</h3>
          </div>
        </div>
        <div className="dish-card">
          <img src={lemonDessert} alt="lemon dessert" />
          <div className="card-body">
            <h2> Lemon dessert</h2> <span>$ 5.00 </span>
            <p>
              This comes straight from grandma's recipe book, every last ingredient has been sourced
              and is as authentic as can be imagined.
            </p>
            <h3>Order a delivery</h3>
          </div>
        </div>
      </article>
    </section>
  );
}
