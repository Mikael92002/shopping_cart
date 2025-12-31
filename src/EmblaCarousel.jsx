import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imageSrc, index) => (
            <div className="embla__slide" key={index}>
              {/* Change this div to an img tag */}
              <img
                src={imageSrc}
                alt={`Slide ${index}`}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
