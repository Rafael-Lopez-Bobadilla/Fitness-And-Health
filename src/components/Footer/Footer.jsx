import s from './Footer.module.scss'
import phone from '../../images/svgs/phone.svg'
import location from '../../images/svgs/location.svg'
import facebook from '../../images/svgs/facebook.svg'
import instagram from '../../images/svgs/instagram.svg'
import youtube from '../../images/svgs/youtube.svg'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.content}>
        <div className={s.contact}>
          <h4>Contact Us!</h4>
          <div><img src={location} /><span>3109 Doctors Drive Los Angeles, California</span></div>
          <div><img src={phone} /><span>202-555-0124</span></div>
        </div>
        <div className={s.connect}>
          <h4>Connect With Us!</h4>
          <div className={s.social}>
            <div><img src={facebook} /></div>
            <div><img src={youtube} /></div>
            <div><img src={instagram} /></div>
          </div>
        </div>
      </div>
      <div className={s.last}>Fitness & Health 2023</div>
    </div>
  )
}

export default Footer