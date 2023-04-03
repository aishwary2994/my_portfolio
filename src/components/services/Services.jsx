import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Modern UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User research.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User interface design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction design.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>FRONTEND DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the UI.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Single-page application development.</p>
            </li>
          </ul>
        </article>
      {/* END OF WEB DEVELOPMENT */}
      <article className='service'>
          <div className="service__head">
            <h3>BACKEND DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database design and management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API development and integration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Server-side scripting and programming.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
        
      </div>
    </section>
  )
}

export default Services
