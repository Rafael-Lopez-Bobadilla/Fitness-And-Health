import s from './Carousel.module.scss'
import left from '../../images/svgs/left.svg'
import right from '../../images/svgs/right.svg'
import close from '../../images/svgs/close.svg'
import { photosArray } from './photosArray'
import { useRef, useEffect } from 'react'
const Carousel = ({ setIsOpen, index }) => {
  const slider = useRef()
  const isDragging = useRef(false)
  const dragStart = useRef(0)
  const animationRef = useRef()
  const position = useRef(0)
  const translation = useRef(0)
  useEffect(() => {
    setPositionByIndex()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const handleResize = () => {
    slider.current.style.transition = 'none'
    setPositionByIndex()
  }
  const animation = () => {
    slider.current.style.transform = `translateX(${translation.current}px)`
    if (isDragging.current) requestAnimationFrame(animation)
  }
  const getPoition = (e) => {
    const position = e.type.includes('mouse') ?
      e.pageX :
      e.touches[0].clientX
    return position
  }
  const handleStart = (e) => {
    slider.current.style.transition = 'none'
    dragStart.current = getPoition(e)
    isDragging.current = true
    animationRef.current = requestAnimationFrame(animation)
  }
  const handleEnd = () => {
    cancelAnimationFrame(animationRef.current)
    isDragging.current = false
    const movedBy = translation.current - position.current
    if (movedBy < -80 && index < photosArray.length - 1) index += 1
    if (movedBy > 80 && index > 0) index -= 1
    slider.current.style.transition = 'transform 0.3s'
    setPositionByIndex()
  }
  const setPositionByIndex = () => {
    translation.current = -slider.current.getBoundingClientRect().width * index
    position.current = translation.current
    slider.current.style.transform = `translateX(${translation.current}px)`
  }
  const handleMove = (e) => {
    if (e.touches && e.touches.length > 1) return
    if (isDragging.current && visualViewport.scale < 1.2) {
      translation.current = getPoition(e) + position.current - dragStart.current
    }
  }
  const arrowClick = (nextIndex) => {
    if (nextIndex < 0) return
    if (nextIndex > photosArray.length - 1) return
    index = nextIndex
    setPositionByIndex(nextIndex)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.slides} ref={slider}
        onContextMenu={e => e.preventDefault()}
        onDragStart={e => e.preventDefault()}
        onTouchStart={handleStart}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchEnd={handleEnd}
        onTouchMove={handleMove}
        onMouseMove={handleMove}>
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
                sizes='(max-width: 700px) 100vw, 700px'
              />
            </div>
          )
        })}
      </div>
      <img src={left} className={s.left} onClick={() => arrowClick(index - 1)} />
      <img src={right} className={s.right} onClick={() => arrowClick(index + 1)} />
      <img src={close} className={s.close} onClick={() => setIsOpen(false)} />
    </div>
  )
}

export default Carousel