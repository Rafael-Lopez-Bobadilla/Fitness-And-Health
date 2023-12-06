import s from './Hero.module.scss'
import hero1_large from '../../images/hero/hero1_large.jpg'
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <img src={hero1_large} className={s.img} />
        <div className={s.overlay}></div>
      </div>
    </section>
  )
}

export default Hero