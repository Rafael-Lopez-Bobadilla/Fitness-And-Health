import { forwardRef } from 'react'
import s from './SectionWrapper.module.scss'
const SectionWrapper = forwardRef(({ name, children }, ref) => {
  return (
    <section className={s.section} ref={ref}>
      <h2 className={s.name}>{name}</h2>
      {children}
    </section>
  )
})

export default SectionWrapper