import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./Carousel.model";

// import * as Atoms from "@/components/Atoms";
import { homeCarouselItems } from "@/data";

function Carousel(prop: ICarouselProps) {
  const {
    carouselItems = homeCarouselItems,
    activeIndex = 0,
    interval = 3000,
    showArrows = false,
    showIndicators = false,
    autoPlay = true,
    infiniteLoop = true,
    heightClass = "empty",
    lazyLoadImages = false,
  } = prop;

  return (
    <ReactCarousel
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      interval={interval}
      selectedItem={activeIndex}
      showArrows={showArrows}
      showIndicators={showIndicators}
      showStatus={false}
      showThumbs={false}
    >
      {carouselItems.map((carouselItem, index) => (
        <div
          key={index}
          className={`${styles.carouselWrapper} ${styles[heightClass]}`}
        >
          <img
            alt="project"
            className={styles.carouselImage}
            loading={lazyLoadImages ? "lazy" : "eager"}
            src={carouselItem.imagePath}
          />
          <div className={styles.overlay} />
        </div>
      ))}
    </ReactCarousel>
  );
}

export default Carousel;
