import React, { useState, useEffect } from 'react';

function Carousel({ media }) {
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const largePhotos = media.map(({ large }) => large);
    setPhotos(largePhotos);
  }, [media]);

  const handleIndexClick = (event) => {
    setActive(+event.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          <img
            key={photo}
            onClick={handleIndexClick}
            data-index={index}
            src={photo}
            alt="animal thumbnail"
            className={index === active ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
