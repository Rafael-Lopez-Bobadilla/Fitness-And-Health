import s from './Header.module.scss'
import ham from '../../images/svgs/ham.svg'
import close from '../../images/svgs/close.svg'
import { useState } from 'react'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <a tabIndex={0} className={s.name}>Fitness & Health</a>
        <img src={ham} className={s.ham} onClick={() => setIsOpen(!isOpen)} />
        <div className={isOpen ? `${s.menu} ${s.open}` : s.menu}>
          <img src={close} className={s.close} onClick={() => setIsOpen(!isOpen)} />
          <ul className={s.list}>
            <li className={s.item}><a tabIndex={0}>About</a></li>
            <li className={s.item}><a tabIndex={0}>Coaches</a></li>
            <li className={s.item}><a tabIndex={0}>Photos</a></li>
            <li className={s.item}><a tabIndex={0}>Pricing</a></li>
            <li className={s.item}><a tabIndex={0}>FAQ</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header 