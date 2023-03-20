import React from 'react';
import Slider from "react-slick";

import './SliderPhoto.scss';

import contactPhoto from '../../images/contact-photo.png';
import contactPhoto2 from '../../images/contact-photo-2.png';
import contactPhoto3 from '../../images/contact-photo-3.png';

function SliderPhoto() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className='slider'>
      <Slider {...settings}>
        <img src={contactPhoto} alt='Фотография контакта' />
        <img src={contactPhoto2} alt='Фотография контакта' />
        <img src={contactPhoto} alt='Фотография контакта' />
        <img src={contactPhoto3} alt='Фотография контакта' />
      </Slider>
    </div>
  );
}

export default SliderPhoto;
