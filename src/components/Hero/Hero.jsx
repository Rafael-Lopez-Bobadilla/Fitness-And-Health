import s from './Hero.module.scss'
import hero1_prev from '../../images/hero/hero1_prev.jpg'
import arrowDown from '../../images/svgs/arrowDown.svg'
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.leftOverlay}></div>
        <img src={hero1_prev} className={s.img} />
        <div className={s.overlay}></div>
        <div className={s.text}>
          <h1>IT'S ALL ABOUT WHAT YOU CAN ACHIVE</h1>
          <p>At Fitness & Health you train with more experience, more fun and more attention.</p>
        </div>
        <div className={s.iconContainer}>
          <img src={arrowDown} className={s.icon} />
        </div>
        <div className={s.rightOverlay}></div>
      </div>
    </section>
  )
}

export default Hero