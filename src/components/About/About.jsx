import s from './About.module.scss'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useContext } from 'react'
import { sectionsContext } from '../../SectionsProvider'
import { articles } from './articles'
const About = () => {
  const sectionsRefs = useContext(sectionsContext)
  return (
    <SectionWrapper heading='About' ref={sectionsRefs[0]}>
      <p className={s.description}>
        We are a vibrant community of like-minded individuals in pursuit of health and fitness.
        Our Coaches are dedicated to providing you with a safe, fun, and effective training program that
        will help you meet your fitness goals. We encourage you to join our family.
      </p>
      <div className={s.articles}>
        {articles.map(article => {
          return (
            <article key={article.id} className={s.article}>
              <div className={s.imgContainer}>
                <img className={s.img}
                  src={article.img__1750}
                  srcSet={`
              ${article.img_1750} 1750w,
              ${article.img_1000} 1000w,
              ${article.img_500} 500w,
            `}
                  sizes='500px' />
              </div>
              <div className={s.articleText}>
                <h3>{article.heading}</h3>
                <p>{article.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default About