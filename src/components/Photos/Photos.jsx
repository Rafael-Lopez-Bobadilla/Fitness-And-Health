import SectionWrapper from "../SectionWrapper/SectionWrapper"
import { useContext } from "react"
import { sectionsContext } from "../../SectionsProvider"
import s from './Photos.module.scss'
const Photos = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper ref={sectionsRefs.photosRef} heading='Photos'>
      <div className={s.placeHolder}></div>
    </SectionWrapper>
  )
}

export default Photos