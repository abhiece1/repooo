import React, { useState, useRef } from 'react';
// import './Slider.css';  // You'll need to create this CSS file
import './Slider2.css'; 
const slideData = [
  {
    index: 0,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 3,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  }
  
];

const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef(null);
  
  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', `${event.clientX - (r.left + Math.floor(r.width / 2))}px`);
    el.style.setProperty('--y', `${event.clientY - (r.top + Math.floor(r.height / 2))}px`);
  };
  
  const handleMouseLeave = () => {    
    slideRef.current.style.setProperty('--x', '0');
    slideRef.current.style.setProperty('--y', '0');
  };
  
  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };
  
  const { src, button, headline, index } = slide;
  let classNames = 'slide';
  
  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';
      
  return (
    <li 
      ref={slideRef}
      className={classNames} 
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img 
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>
      
      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button className="slide__action btn">{button}</button>
      </article>
    </li>
  );
};

const SliderControl = ({ type, title, handleClick }) => (
  <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

const Slider = ({ heading = "Example Slider", slides = slideData }) => {
  const [current, setCurrent] = useState(0);
  
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };
  
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };
  
  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={{
        transform: `translateX(-${current * (100 / slides.length)}%)`
      }}>
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>
        
        {slides.map(slide => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      
      <div className="slider__controls">
        <SliderControl 
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        
        <SliderControl 
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Slider;