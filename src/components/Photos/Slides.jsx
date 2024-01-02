import s from './Slides.module.scss'
const Slides = ({ children }) => {
  return (
    <div className={s.slides}>
      {children}
    </div>
  )
}

export default Slides