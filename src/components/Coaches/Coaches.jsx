import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
import s from './Coaches.module.scss'
const Coaches = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper heading='Coaches' ref={sectionsRefs[1]}>
      <p className={s.mainText}>Each of our carefully selected Personal Trainers embody the value & essence of Live Fit Gym. They come from a background of diverse experiences–professional & personal. Each Personal Trainer goes through rigorous training of Live Fit Gym’s values and offerings. Please refer to their areas of speciality if you have specific core goals & needs. We aren’t just excited to Live Fit & Live Well with you: we’re determined to build your inner & outer resiliency!</p>
    </SectionWrapper>
  )
}

export default Coaches