import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext, useRef, useState } from 'react'
import { sectionsContext } from '../../SectionsProvider'
import s from './Coaches.module.scss'
import { coaches } from './coachesInfo'

const Coaches = () => {
  const sectionsRefs = useContext(sectionsContext)
  const isDragging = useRef(false)
  const startPosition = useRef(0)
  const animationRef = useRef()
  const translate = useRef(0)
  const position = useRef(0)
  const index = useRef(0)
  const slider = useRef()
  const [currentCoach, setCurrentCoach] = useState(coaches[0].name)
  const animation = () => {
    slider.current.style.transform = `translateX(${translate.current}px)`
    if (isDragging.current) requestAnimationFrame(animation)
  }
  const handleStart = (e) => {
    slider.current.style.transition = 'none'
    isDragging.current = true
    startPosition.current = e.clientX
    animationRef.current = requestAnimationFrame(animation)
  }
  const handleEnd = () => {
    if (isDragging.current) {
      slider.current.style.transition = 'transform 0.3s linear'
      position.current = (-slider.current.scrollWidth / coaches.length)
      translate.current = position.current * index.current
      cancelAnimationFrame(animationRef.current)
      isDragging.current = false
      position.current = translate.current
    }
  }
  const handleMove = (e) => {
    const translateTo = position.current + e.clientX - startPosition.current
    if (translateTo < 0 && translateTo > -slider.current.scrollWidth) {
      if (isDragging.current) {
        if ((translate.current - position.current) < -30 && index.current < coaches.length - 1) {
          index.current = index.current + 1
          handleEnd()
          return
        }
        if ((translate.current - position.current) > 30 && index.current > 0) {
          index.current = index.current - 1
          handleEnd()
          return
        }
        translate.current = translateTo
      }
    }
  }
  return (
    <SectionWrapper heading='Coaches' ref={sectionsRefs[1]}>
      <p className={s.mainText}>Each of our carefully selected Personal Trainers embody the value & essence of Fitness & Health. They come from a background of diverse experiences–professional & personal. Each Personal Trainer goes through rigorous training of Live Fit Gym’s values and offerings. Please refer to their areas of speciality if you have specific core goals & needs. We aren’t just excited to Live Fit & Live Well with you: we’re determined to build your inner & outer resiliency!</p>
      <div className={s.sliderContainer}>
        <div className={s.slider} ref={slider}
          onPointerDown={handleStart}
          onPointerUp={handleEnd}
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
                className={currentCoach === coach.name ? `${s.img} ${s.current}` : s.img}
              />
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Coaches