import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Realtor Website (Fullstack) </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/realtor-clone-react" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Restaurant UI (Frontend)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/restaurant-website-react" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Image Generator (MERN)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/dall-e" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Fitness Exercises App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/fitness-exercises-app" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt="" />
          </div>
          <h3> Bill Generator(React Native)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/Invoice-generator" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG8} alt="" />
          </div>
          <h3> AI-Powered Tshirt design</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/project_threejs_ai" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG9} alt="" />
          </div>
          <h3>Article Summarize (OpenAI)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/aishwary2994/openAI_articles_summarize" className='btng' target='_blank'>Github</a>
            {/* <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio
