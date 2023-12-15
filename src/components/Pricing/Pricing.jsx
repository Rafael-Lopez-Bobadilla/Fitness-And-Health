import SectionWrapper from "../SectionWrapper/SectionWrapper"
import { useContext } from "react"
import { sectionsContext } from "../../SectionsProvider"
import s from './Pricing.module.scss'
import { useState } from "react"
import { cards, features } from "./pricingInfo"
import tick from '../../images/svgs/tick.svg'
import closeGray from '../../images/svgs/closeGray.svg'
const Pricing = () => {
  const sectionsRefs = useContext(sectionsContext)
  const [selected, setSelected] = useState('Platinum')
  return (
    <SectionWrapper ref={sectionsRefs[3]} heading={'Pricing'}>
      <div className={s.selector}>
        {cards.map(card => {
          return <div className={card.name === selected ? `${s.option} ${s.selected}` : s.option}
            key={card.name}
            onClick={() => setSelected(card.name)}>
            {card.name}</div>
        })}
      </div>
      <div className={s.cards}>
        {cards.map(card => {
          return (
            <div className={card.name === selected ? `${s.card} ${s.selected}` : s.card}>
              <h3>{card.name}</h3>
              <h4>{card.price}</h4>
              {features.map((item, index) => {
                return (
                  <div className={index < card.features ? s.item : `${s.item} ${s.blur}`}>
                    <img src={index < card.features ? tick : closeGray} />
                    <span>{item}</span>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Pricing