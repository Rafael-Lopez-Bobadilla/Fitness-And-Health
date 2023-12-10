import s from './Header.module.scss'
import ham from '../../images/svgs/ham.svg'
import close from '../../images/svgs/close.svg'
import { useState, useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sectionsRefs = useContext(sectionsContext)
  const items = ['About', 'Coaches', 'Photos', 'Pricing', 'FAQ']
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <a className={s.name}>Fitness & Health</a>
        <img src={ham} className={s.ham} onClick={() => setIsOpen(!isOpen)} />
        <div className={isOpen ? `${s.menu} ${s.open}` : s.menu}>
          <img src={close} className={s.close} onClick={() => setIsOpen(!isOpen)} />
          <ul className={s.list}>
            {items.map((item, index) => {
              return <li className={s.item} key={index}>
                <a onClick={() => scrollToSection(sectionsRefs[index])}>{item}</a>
              </li>
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header 