import leftBlack from '../../images/svgs/leftBlack.svg'
import rightBlack from '../../images/svgs/rightBlack.svg'
const ImgController = ({ coaches, selected, handleChange, s }) => {
  return (
    <>
      <div className={s.imgController}>
        <img src={leftBlack} className={s.arrow} onClick={() => handleChange(selected - 1)} />
        <div className={s.imgContainer}>
          {coaches.map((coach, index) => {
            return (
              <img key={coach.name} src={coach.photo_500}
                srcSet={`
                ${coach.photo_500} 500w,
                ${coach.photo_300} 300w,
                ${coach.photo_150} 150w
              `}
                sizes='150px'
                className={selected === index ? `${s.img} ${s.selected}` : s.img}
              />
            )
          })}
        </div>
        <img src={rightBlack} className={s.arrow} onClick={() => handleChange(selected + 1)} />
      </div>
      <div className={s.dotsContainer}>
        {coaches.map((coach, index) => {
          return (
            <div key={index} className={selected === index ? `${s.dot} ${s.selected}` : s.dot}
              onClick={() => handleChange(index)}></div>
          )
        })}
      </div>
    </>
  )
}

export default ImgController