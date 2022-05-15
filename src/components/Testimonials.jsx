import React from 'react'
import { Pagination, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Rating } from '@mui/material';

const TESTIMONIALS = [
  { text: 'Kaushal was wonderful to work with. His quality of work was excellent and able to meet deadlines. I has been a pleasure to work with him.', rate: 5 },
  { text: '', rate: 5 },
  { text: 'Kaushal is very helpful on our project and has completed tasks sucessfully.', rate: 5 },
  { text: '', rate: 5 },
  { text: 'Kaushal is very hardworking, technical sound guy and always come through with any task. If i get a chance, i will definitely hire him again. 10/10', rate: 5 },
  { text: '', rate: 4.85 },
  { text: "Don't doubt to hire him. Delivered before the deadline.", rate: 5 },
  { text: 'Very prompt and faster in completing the tasks', rate: 5 },
  { text: '', rate: 5 },
  { text: 'Kaushal is an excellent backend developer and has wealth of technical knowledge. I will continue to keep on with other projects.', rate: 5 },
  { text: '', rate: 5 },
  { text: '', rate: 3.9 },
  { text: 'Kaushal is the best freelancer I have never met be4. I have signed 3 tasks with him in this project, he was finished all of them be4 the deadline with high quality and performance. He did help me alots with this period of time during the project. Fast communication and response time to time. Definitely work again if i got similar job with him next time.', rate: 5 },
  { text: 'Very Skilled and Supported a lot', rate: 5 },
  { text: 'Fantastic work Kaushal fascinated to work will you again, I will get back to you soon with more work. A great fraction of knowledge of React.js and Node.js', rate: 5 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Reviews</h2>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
          {TESTIMONIALS.map((item, index) => (<SwiperSlide>
            <div className="testimonial-item" key={`testimonials-${index}`}>
              <Rating name="half-rating-read" defaultValue={item.rate} precision={0.5} readOnly />
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
              {/* <h3>Saul Goodman</h3>
              <h4>-Upwork</h4> */}
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                {item.text || "N/A"}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </SwiperSlide>))}

        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials