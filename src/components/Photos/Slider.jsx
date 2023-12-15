import { photosArray } from "./photosArray"
import s from './Slider.module.scss'
import left from '../../images/svgs/left.svg'
import right from '../../images/svgs/right.svg'
import close from '../../images/svgs/close.svg'
import { useRef, useEffect } from "react"
const Slider = ({ setIsOpen, index }) => {
  const slider = useRef()
  const startPosition = useRef(0)
  const translation = useRef(0)
  const position = useRef(0)
  const isDragging = useRef(false)
  const animationRef = useRef(null)
  useEffect(() => {
    position.current = -slider.current.offsetWidth * index.current
    translation.current = position.current
    slider.current.style.transform = `translateX(${position.current}px)`
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const handleStart = (e) => {
    slider.current.style.transition = 'none'
    startPosition.current = e.clientX
    isDragging.current = true
    animationRef.current = requestAnimationFrame(animation)
  }
  const handleMove = (e) => {
    if (isDragging) {
      translation.current = position.current + e.clientX - startPosition.current
    }
  }
  const handleEnd = () => {
    cancelAnimationFrame(animationRef.current)
    isDragging.current = false
    const movedBy = translation.current - position.current
    if (movedBy > 80 && index.current > 0) index.current = index.current - 1
    if (movedBy < -80 && index.current < photosArray.length - 1) index.current = index.current + 1
    const finalPosition = -slider.current.offsetWidth * index.current
    slider.current.style.transition = 'transform 0.3s linear'
    translation.current = finalPosition
    position.current = finalPosition
  }
  const handleResize = () => {
    slider.current.style.transition = 'none'
    if (slider.current) {
      translation.current = -slider.current.offsetWidth * index.current
      position.current = translation.current
      slider.current.style.transform = `translateX(${position.current}px)`
    }
  }
  const animation = () => {
    slider.current.style.transform = `translateX(${translation.current}px)`
    if (isDragging.current) requestAnimationFrame(animation)
  }
  const onArrowClick = (nextIndex) => {
    if (nextIndex > 0 && nextIndex < photosArray.length - 1) index.current = nextIndex
    translation.current = -slider.current.offsetWidth * index.current
    position.current = translation.current
    slider.current.style.transition = 'transform 0.3s linear'
    slider.current.style.transform = `translateX(${position.current}px)`
  }
  return (
    <>
      <div className={s.overlay}></div>
      <div className={s.container}>
        <div className={s.slider} ref={slider}
          onPointerDown={handleStart}
          onPointerMove={handleMove}
          onPointerUp={handleEnd}
          onDragStart={e => e.preventDefault()}
          onContextMenu={e => e.preventDefault()}
        >
          {photosArray.map((photo, index) => {
            return (
              <div className={s.slide} key={index}>
                <img className={s.img}
                  src={photo.photo_2000 ? photo.photo_2000 : photo.photo_1500}
                  srcSet={`
                    ${photo.photo_2000 ? `${photo.photo_2000} 2000w,` : ''}
                    ${photo.photo_1500 ? `${photo.photo_1500} 1500w,` : ''}
                    ${photo.photo_1000} 1000w
                  `}
                  sizes='(max-width: 700px) 100vw, (max-width: 1399px) 700px, 1000px'
                />
              </div>
            )
          })}
        </div>
        <img src={left} className={s.left} onClick={() => onArrowClick(index.current - 1)} />
        <img src={right} className={s.right} onClick={() => onArrowClick(index.current + 1)} />
        <img src={close} className={s.close} onClick={() => setIsOpen(false)} />
      </div>
    </>

  )
}

export default Slider