import { photosArray } from "./photosArray"
import s from './Slider.module.scss'
import left from '../../images/svgs/left.svg'
import right from '../../images/svgs/right.svg'
import close from '../../images/svgs/close.svg'
import { useRef, useEffect } from "react"
const Slider = ({ setIsOpen, index }) => {
  const slider = useRef()
  useEffect(() => {
    const initialPosition = -slider.current.offsetWidth * index.current
    slider.current.style.transform = `translateX(${initialPosition}px)`
  }, [])
  const handleStart = (e) => {
    console.log('start')
  }
  return (
    <>
      <div className={s.overlay}></div>
      <div className={s.container}>
        <div className={s.slider} ref={slider}
          onPointerDown={handleStart}
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
                />
              </div>
            )
          })}
        </div>
        <img src={left} className={s.left} />
        <img src={right} className={s.right} />
        <img src={close} className={s.close} onClick={() => setIsOpen(false)} />
      </div>
    </>

  )
}

export default Slider