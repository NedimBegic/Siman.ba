// ServiceCarousel.js

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ServiceCarousel.module.css";
import services from "../store/services";
import Services from "../sideComponents/Services";

// Custom SVG icons for arrows
const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ServiceCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={`${styles.customCarouselButton} ${styles.prevButton}`}
            >
              <LeftArrowIcon />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className={`${styles.customCarouselButton} ${styles.nextButton}`}
            >
              <RightArrowIcon />
            </button>
          )
        }
      >
        {services.map((service, index) => (
          <Services
            icon={service.icon}
            key={index}
            name={service.name}
            description={service.description}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceCarousel;
