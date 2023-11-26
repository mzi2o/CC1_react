import React, { useState } from 'react';

import img1 from './Imgs/img1.jpg';
import img2 from './Imgs/img2.jpg';
import img3 from './Imgs/img3.jpg';
import img4 from './Imgs/img4.jpg';
import img5 from './Imgs/img5.jpg';

export const SliderData = [img1, img2, img3, img4, img5];
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <div style={{ height: '100%' }}>
      <h2>you are in the {current} image</h2><br/>
      <section className='slider'>
        <input type='button' className='left-arrow' onClick={prevSlide} value="<" />
        <input type='button' className='right-arrow' onClick={nextSlide} value=">" />
        {SliderData.map((slide, index) => (
          <div  key={index}>
            {index === current && <img src={slide} alt='travel' className='hi' />}
          </div>
        ))}
      </section>
    </div>
  );
  
};

export default Slider;
