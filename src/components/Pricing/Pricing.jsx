import SectionWrapper from "../SectionWrapper/SectionWrapper"
import { useContext } from "react"
import { sectionsContext } from "../../SectionsProvider"
const Pricing = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper ref={sectionsRefs[3]} heading={'Pricing'}>

    </SectionWrapper>
  )
}

export default Pricing