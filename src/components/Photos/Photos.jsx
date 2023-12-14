import SectionWrapper from "../SectionWrapper/SectionWrapper"
import { useContext } from "react"
import { sectionsContext } from "../../SectionsProvider"
import s from './Photos.module.scss'
const Photos = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper ref={sectionsRefs[2]} heading='Photos'>
      <div className={s.photos}>

      </div>
    </SectionWrapper>
  )
}

export default Photos