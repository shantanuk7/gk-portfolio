import Project from "./Project";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MyProjects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="py-8">
      
      <div className="text-center py-16">
        <h1 className="text-5xl font-light inline-block">My <i className="font-medium text-[#0779E3]">Projects</i></h1>
      </div>
      
      <Carousel
        additionalTransfrom={0}
        customTransition="transform 750ms ease-in-out"
        autoPlay={true}
        arrows
        autoPlaySpeed={5000}
        centerMode={false}
        className="mx-auto w-[63rem]"
        containerClass="container"
        dotListClass="dots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass="slider"
        slidesToSlide={1}
        swipeable
      >
      <Project
        type="Interactive Design"
        title="PesiMix - Pesticide Mixer"
        feature="Design Registered at Patent office of India"
        description="A physical interactive device designed to help farmers streamline the pesticide mixing & application process. "
        primaryColour="bg-lightOrange"
        secondaryColour="bg-darkOrange"
        textBgColour="text-bg-orange"
        textColour="text-orange"
        foregroundImg="homepage/projects/pesimix-edit.png"
        backImg="homepage/projects/pesimix-back.png"
        
      />
      <Project
        type="Case Study"
        title="Trade Rehearse - Mobile App"
        feature="Design Registered at Patent office of India"
        description="A physical interactive device designed to help farmers streamline the pesticide mixing & application process. "
        primaryColour="bg-lightOrange"
        secondaryColour="bg-darkOrange"
        textBgColour="text-bg-orange"
        textColour="text-orange"
        foregroundImg="homepage/projects/trade-rehearse-mock-duo.png"
        backImg="homepage/projects/trade-rehearse-mock-back.png"
        
      />
    </Carousel>
      <div className="mx-auto text-center py-14">
        <a href="#" className="text-3xl font-bold text-[#0779E3] underline">Explore All</a>
      </div>
    </div>
  );
}
