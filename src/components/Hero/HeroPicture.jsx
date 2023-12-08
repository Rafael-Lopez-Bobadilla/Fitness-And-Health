import hero1_large from '../../images/hero/hero1_large.jpg'
import hero1_medium from '../../images/hero/hero1_medium.jpg'
import hero1_small from '../../images/hero/hero1_small.jpg'
import hero1_slarge from '../../images/hero/hero1_slarge.jpg'
import hero1_smedium from '../../images/hero/hero1_smedium.jpg'
import hero1_ssmall from '../../images/hero/hero1_ssmall.jpg'
import s from './HeroPicture.module.scss'
const HeroPicture = () => {
  return (
    <picture>
      <source media='(max-width: 900px)'
        srcSet={`
          ${hero1_slarge} 3392w,
          ${hero1_smedium} 1500w,
          ${hero1_ssmall} 700w
          `} />
      <img src={hero1_large} className={s.img}
        srcSet={
          `${hero1_large} 4728w,
              ${hero1_medium} 3000w,
              ${hero1_small} 1500w`
        }
        sizes='(min-width: 1240px) 1240px' />
    </picture>
  )
}

export default HeroPicture