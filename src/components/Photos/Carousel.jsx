import s from './Carousel.module.scss'
import left from '../../images/svgs/left.svg'
import right from '../../images/svgs/right.svg'
import close from '../../images/svgs/close.svg'
import Slides from './Slides'
import { photosArray } from './photosArray'
const Carousel = ({ setIsOpen, index }) => {
  const arrowClick = (nextIndex) => {
    if (nextIndex < 0) return
    if (nextIndex > photosArray - length - 1) return
    index = nextIndex
  }
  return (
    <div className={s.wrapper}>
      <Slides index={index}>
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
      </Slides>
      <img src={left} className={s.left} onClick={() => arrowClick(index - 1)} />
      <img src={right} className={s.right} onClick={() => arrowClick(index + 1)} />
      <img src={close} className={s.close} onClick={() => setIsOpen(false)} />
    </div>
  )
}

export default Carousel