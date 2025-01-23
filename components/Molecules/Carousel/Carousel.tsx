import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default styles
import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./Carousel.model";

import { homeCarouselItems } from "@/data";
import { LeftArrow, RightArrow } from "@/components/icons";

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
    overlayBackground = true,
    imageObjectFit = "cover",
  } = prop;

  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    backgroundColor: "white", // White background
    borderRadius: "50%", // Circular background
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional shadow
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <ReactCarousel
      autoPlay={autoPlay}
      infiniteLoop={infiniteLoop}
      interval={interval}
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <div style={{ ...arrowStyles, right: 15 }} onClick={onClickHandler}>
            <RightArrow />
          </div>
        )
      }
      renderArrowPrev={(onClickHandler, hasNext) =>
        hasNext && (
          <div style={{ ...arrowStyles, left: 15 }} onClick={onClickHandler}>
            <LeftArrow />
          </div>
        )
      }
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
            className={`${styles.carouselImage} ${imageObjectFit === "contain" ? "object-contain" : "object-cover"}`}
            loading={lazyLoadImages ? "lazy" : "eager"}
            src={carouselItem.imagePath}
          />
          <div
            className={`${styles.overlay} ${overlayBackground ? "bg-black bg-opacity-50" : ""}`}
          />
        </div>
      ))}
    </ReactCarousel>
  );
}

export default Carousel;
