import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Suraj Thool',
    review: '"I came to Aishwary for a facelift for my site. I have been thoroughly delighted with the experience - Aishwary is a very talented Developer, but also a lot more than that - his ability to grasp things with a fresh pair of eyes is great, and he has the seniority to project manage everything himself. Absolutely brilliant!"'
  },
  {
    avatar: AVTR2,
    name: 'Aditya Yadav',
    review: '"Aishwary provided top quality, thoughtful and high impact design work with outstanding attention to detail. His communication was excellent from the outset and showed a willingness to persevere until the perfect design was achieved. Obviously passionate about the work, a true professional. Wouldn’t hesitate to recommend."'
  },
  {
    avatar: AVTR3,
    name: 'Rahul Verma',
    review: '" Fantastic job done by Aishwary for two of our brand logos along with the user interface. We have worked with some of the best ad agencies in the past and working with Aishwary has been an absolute pleasure. His work is no less than the most experienced in the industry "'
  },
  {
    avatar: AVTR4,
    name: 'Vedanti Thosare',
    review: '"Just a quick note to say thank you for your hard work that went in to getting our website live and out there. I was really impressed with the quick turnaround of changes."'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index}      className='testimonial'>
               <div className="client__avatar">
                <img src={avatar} alt='avatar'/>
               </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
               {review}
              </small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
