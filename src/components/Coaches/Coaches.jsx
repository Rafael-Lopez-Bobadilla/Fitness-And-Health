import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
import s from './Coaches.module.scss'
import { coaches } from './coachesInfo'

const Coaches = () => {
  const sectionsRefs = useContext(sectionsContext)
  const handleStart = (e) => {
    console.log('start')
  }
  const handleEnd = () => {
    console.log('end')
  }
  const handleMove = (e) => {
    e.preventDefault()
    console.log('move')
  }
  return (
    <SectionWrapper heading='Coaches' ref={sectionsRefs[1]}>
      <p className={s.mainText}>Each of our carefully selected Personal Trainers embody the value & essence of Live Fit Gym. They come from a background of diverse experiences–professional & personal. Each Personal Trainer goes through rigorous training of Live Fit Gym’s values and offerings. Please refer to their areas of speciality if you have specific core goals & needs. We aren’t just excited to Live Fit & Live Well with you: we’re determined to build your inner & outer resiliency!</p>
      <div className={s.carouselContainer}>
        <div className={s.carousel}
          onPointerDown={handleStart}
          onPointerUp={handleEnd}
          onPointerLeave={handleEnd}
          onPointerMove={handleMove}
          onDragStart={e => e.preventDefault()}
          onContextMenu={e => e.preventDefault()}
        >
          {coaches.map(coach => {
            return (
              <img key={coach.name} src={coach.photo_500}
                srcSet={`
              ${coach.photo_500} 500w,
              ${coach.photo_300} 300w,
              ${coach.photo_150} 150w
            `}
                sizes='150px'
                onDragStart={e => e.preventDefault()}
              />
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Coaches