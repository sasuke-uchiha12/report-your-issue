import React, { useState, useEffect } from 'react';
import '../css/HomeCarousel.css';

const images = [
  require("../img/home/image1.jpg"),
  require("../img/home/image2.jpg"),
  require("../img/home/image3.jpg")
  // Add more image paths as needed
];

function HomeCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex(currentIndex => (currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt={`Slide ${index + 1}`}
          className={index === currentImageIndex ? "active" : ""}
        />
      ))}
      <button className="prev" onClick={goToPrev}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>
    </div>
  );
}

export default HomeCarousel;
