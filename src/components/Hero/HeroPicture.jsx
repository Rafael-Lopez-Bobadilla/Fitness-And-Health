import hero_3000 from '../../images/hero/hero_3000.jpg'
import hero_2000 from '../../images/hero/hero_2000.jpg'
import hero_1500 from '../../images/hero/hero_1500.jpg'
import hero_1000 from '../../images/hero/hero_1000.jpg'
import hero_s2250 from '../../images/hero/hero_s2250.jpg'
import hero_s1500 from '../../images/hero/hero_s1500.jpg'
import hero_s1000 from '../../images/hero/hero_s1000.jpg'

import s from './HeroPicture.module.scss'
const HeroPicture = () => {
  return (
    <picture>
      <source media='(max-width: 750px)' srcSet={`
        ${hero_s2250} 2250w,
        ${hero_s1500} 1500w,
        ${hero_s1000} 1000w
      `} />
      <img src={hero_3000} className={s.img}
        srcSet={
          `${hero_3000} 3000w,
          ${hero_2000} 2000w,
          ${hero_1500} 1500w,
          ${hero_1000} 1000w`
        }
        sizes='(min-width: 1240px) 992px' />
    </picture>
  )
}

export default HeroPicture