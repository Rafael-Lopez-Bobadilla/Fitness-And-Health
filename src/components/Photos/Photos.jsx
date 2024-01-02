import SectionWrapper from "../SectionWrapper/SectionWrapper"
import { useContext } from "react"
import { sectionsContext } from "../../SectionsProvider"
import s from './Photos.module.scss'
import { photosArray } from "./photosArray"
import Carousel from "./Carousel"
import { useState } from "react"
const Photos = () => {
  const sectionsRefs = useContext(sectionsContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SectionWrapper ref={sectionsRefs[2]} heading='Photos'>
      <div className={s.grid}>
        {photosArray.map((photo, index) => {
          return (
            <img key={index} src={photo.photo_1000}
              srcSet={`
                ${photo.photo_1000} 1000w,
                ${photo.photo_500} 500w
              `}
              sizes='(max-width: 999px) 200px, 280px'
              className={s.img}
              onClick={() => setIsOpen(true)}
            />
          )
        })}
      </div>
      {isOpen && <Carousel setIsOpen={setIsOpen} />}
    </SectionWrapper>
  )
}

export default Photos