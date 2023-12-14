import SectionWrapper from '../SectionWrapper/SectionWrapper'
import s from './Coaches.module.scss'
import { useState } from 'react'
import { coaches } from './coachesInfo'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
import ImgController from './ImgController'
const Coaches = () => {
  const [selected, setSelected] = useState(0)
  const sectionsRefs = useContext(sectionsContext)
  const handleChange = (index) => {
    if (index < 0) index = coaches.length - 1
    if (index === coaches.length) index = 0
    setSelected(index)
  }
  return (
    <SectionWrapper heading='Coaches' ref={sectionsRefs[1]}>
      <p className={s.description}>Each of our carefully selected Personal Trainers embody the value & essence of Fitness & Health. They come from a background of diverse experiences–professional & personal. Each Personal Trainer goes through rigorous training of Live Fit Gym’s values and offerings. Please refer to their areas of speciality if you have specific core goals & needs. We aren’t just excited to Live Fit & Live Well with you: we’re determined to build your inner & outer resiliency!</p>
      <ImgController coaches={coaches} selected={selected} handleChange={handleChange} s={s} />
      <div className={s.info}>
        <div>
          <h3>{coaches[selected].name}</h3>
          <p>{coaches[selected].text}</p>
        </div>
        <div>
          <h3>Specialties</h3>
          <ul>
            {coaches[selected].specialties.map(item => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Coaches