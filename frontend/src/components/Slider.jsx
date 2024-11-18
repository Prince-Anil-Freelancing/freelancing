import React, { useState, useEffect } from 'react';
import image1 from "../assets/farmer.jpg";
import image2 from "../assets/mainimage.jpg";
import image3 from "../assets/home spider.jpg";

const slides = [
  {
    image: image1,
    heading: 'Slide 1',
    description: 'Description for Slide 1'
  },
  {
    image:image2,
    heading: 'Slide 2',
    description: 'Description for Slide 2'
  },
  {
    image: image3,
    heading: 'Slide 3',
    description: 'Description for Slide 3'
  }
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-button">❮</button>
        <img src={slides[currentIndex].image} alt="Carousel Slide" className="carousel-image" />
        <button onClick={nextSlide} className="carousel-button">❯</button>
      </div>
      <h2>{slides[currentIndex].heading}</h2>
      <p>{slides[currentIndex].description}</p>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
