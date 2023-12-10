import { Children, createContext, useRef } from "react"
export const sectionsContext = createContext(null)
const SectionsProvider = ({ children }) => {
  const aboutRef = useRef()
  const coachesRef = useRef()
  const photosRef = useRef()
  const pricingRef = useRef()
  const faqRef = useRef()
  const sectionsRefs = [aboutRef, coachesRef, photosRef, pricingRef, faqRef]
  return (
    <sectionsContext.Provider value={sectionsRefs}>
      {children}
    </sectionsContext.Provider>
  )
}

export default SectionsProvider