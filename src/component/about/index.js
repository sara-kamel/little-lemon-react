import MarioAndAdrianA from '../../icons_assets/MarioAndAdrianA.jpg'
import MarioAndAdrianB from '../../icons_assets/MarioAndAdrianB.jpg'
import './styles.css'
export default function About () {
  return (
    <section className='about-section'>
      <article className='information-section'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex
          leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
          Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
          blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id,
          vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae
          lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit
          consequat. In dictum ligula in elit euismod malesuada. Curabitur
          varius augue id tempus ultricies. Mauris suscipit porta odio, et
          pretium nibh scelerisque ut.
        </p>
      </article>
      <article className='pictures-section'>
        <img
          className='picture-one'
          src={MarioAndAdrianA}
          alt='mario and andrian'
        />
        <img
          className='picture-two'
          src={MarioAndAdrianB}
          alt='mario and andrian'
        />
      </article>
    </section>
  )
}
