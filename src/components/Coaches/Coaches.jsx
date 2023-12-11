import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
const Coaches = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper heading='Coaches' ref={sectionsRefs[1]}>

    </SectionWrapper>
  )
}

export default Coaches