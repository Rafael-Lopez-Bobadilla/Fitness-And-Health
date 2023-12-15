import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
import s from './Faq.module.scss'
import { questions } from './questions'
import plus from '../../images/svgs/plus.svg'
import closeBlack from '../../images/svgs/closeBlack.svg'
import { useState } from 'react'
const Faq = () => {
  const sectionsRefs = useContext(sectionsContext)
  const [selected, setSelected] = useState(null)

  return (
    <SectionWrapper heading='FAQ' ref={sectionsRefs[4]}>
      <div className={s.questions}>
        {questions.map((item, index) => {
          return (
            <div className={selected === index ? `${s.item} ${s.selected}` : s.item}
              key={index}>
              <div onClick={() => selected === null ? setSelected(index) : setSelected(null)}>
                <h4>{item.question}</h4>
                {selected === index ?
                  <img src={closeBlack} /> :
                  <img src={plus} />}
              </div>
              {selected === index ? <p className={s.answer}>{item.answer}</p> : <></>}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Faq