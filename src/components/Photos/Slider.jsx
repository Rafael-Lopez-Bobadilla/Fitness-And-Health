import { photosArray } from "./photosArray"
import s from './Slider.module.scss'
import left from '../../images/svgs/left.svg'
import right from '../../images/svgs/right.svg'
import close from '../../images/svgs/close.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const Slider = ({ setIsOpen, index, setIndex }) => {

  const onArrowClick = (nextIndex) => {
    if (nextIndex > photosArray.length - 1) nextIndex = 0
    if (nextIndex < 0) nextIndex = photosArray.length - 1
    setIndex(nextIndex)
  }
  return (
    <div className={s.overlay}>
      <Carousel showIndicators={false} showThumbs={false} showArrows={false}
        selectedItem={index} showStatus={false} autoPlay={false}
        emulateTouch={true} transitionTime={300} dynamicHeight={true}
      >
        {photosArray.map((photo, index) => {
          return (
            <img className={s.img} key={index}
              src={photo.photo_2000 ? photo.photo_2000 : photo.photo_1500}
              srcSet={`
                    ${photo.photo_2000 ? `${photo.photo_2000} 2000w,` : ''}
                    ${photo.photo_1500 ? `${photo.photo_1500} 1500w,` : ''}
                    ${photo.photo_1000} 1000w
                  `}
              sizes='(max-width: 700px) 100vw, 700px'
              style={{ width: 'auto' }}
            />
          )
        })}
      </Carousel>
      <img src={left} className={s.left} onClick={() => onArrowClick(index - 1)} />
      <img src={right} className={s.right} onClick={() => onArrowClick(index + 1)} />
      <img src={close} className={s.close} onClick={() => setIsOpen(false)} />
    </div>
  )
}

export default Slider