import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMediaQuery } from "react-responsive";
import styles from "./ServiceCarousel.module.css";
import services from "../store/services";
import Services from "../sideComponents/Services";

const ServiceCarousel = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  // Function to group services for desktop view
  const groupServices = (services) => {
    const grouped = [];
    for (let i = 0; i < services.length; i += 3) {
      grouped.push(services.slice(i, i + 3));
    }
    return grouped;
  };

  const groupedServices = groupServices(services);

  return (
    <div className={styles.carouselContainer}>
      <h2>Usluge</h2>
      <span>Osigurajte tačnost i jasnoću vaših tekstova</span>
      <Carousel
        className={styles.car}
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
              {"<"}
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
              {">"}
            </button>
          )
        }
      >
        {isDesktop
          ? groupedServices.map((group, index) => (
              <div className={styles.serviceGroup} key={index}>
                {group.map((service, subIndex) => (
                  <Services
                    icon={service.icon}
                    key={subIndex}
                    name={service.name}
                    description={service.description}
                  />
                ))}
              </div>
            ))
          : services.map((service, index) => (
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
