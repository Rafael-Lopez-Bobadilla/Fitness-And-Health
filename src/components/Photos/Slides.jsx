import s from './Slides.module.scss'
import { useRef, useEffect } from 'react'
const Slides = ({ children, index }) => {
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
    if (movedBy < -80 && index < children.length - 1) index += 1
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
  return (
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
      {children}
    </div>
  )
}

export default Slides