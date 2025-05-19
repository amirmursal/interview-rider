import { useCallback, useState } from "react";
import "./imagecarousel.css";

const images = [
  {
    src: "https://picsum.photos/id/600/600/400",
    alt: "Forest",
  },
  {
    src: "https://picsum.photos/id/100/600/400",
    alt: "Beach",
  },
  {
    src: "https://picsum.photos/id/200/600/400",
    alt: "Yak",
  },
  {
    src: "https://picsum.photos/id/300/600/400",
    alt: "Hay",
  },
  {
    src: "https://picsum.photos/id/400/600/400",
    alt: "Plants",
  },
  {
    src: "https://picsum.photos/id/500/600/400",
    alt: "Building",
  },
];

const ImageCarosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    const nextIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex]);

  return (
    <div className="image-carousel">
      <img
        className="image-carousel__image"
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />
      <button
        aria-label="Previous image"
        className="image-carousel__button image-carousel__button--prev"
        onClick={handlePrevious}
      >
        &#10094;
      </button>
      <button
        aria-label="Next image"
        className="image-carousel__button image-carousel__button--next"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarosel;
