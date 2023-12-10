import s from './About.module.scss'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
const About = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper name='About' ref={sectionsRefs[0]}>
      <div>

      </div>
    </SectionWrapper>
  )
}

export default About