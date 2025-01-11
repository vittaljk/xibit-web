import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import styles from "./Carousel.module.scss"; // Import SCSS module

import { carouselItems } from "@/data";

function HomeCarousel() {
  return (
    <ReactCarousel
      autoPlay
      infiniteLoop
      interval={3000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      {carouselItems.map((carouselItem, index) => (
        <div key={index} className={styles.carouselWrapper}>
          <img
            alt="project"
            className={styles.carouselImage}
            src={carouselItem.imagePath}
          />
          <div className={styles.overlay} />
        </div>
      ))}
    </ReactCarousel>
  );
}

export default HomeCarousel;
