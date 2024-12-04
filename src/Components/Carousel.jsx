import { useState, useEffect, useCallback } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialCardData } from "../../testimonialCardData";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 3000; // Auto-scroll interval (in milliseconds)

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonialCardData.length);
  }, []);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialCardData.length) % testimonialCardData.length);
  };

  // Auto-scroll logic using useEffect
  useEffect(() => {
    const autoScroll = setInterval(nextSlide, intervalTime);

    // Cleanup the interval on component unmount
    return () => clearInterval(autoScroll);
  }, [nextSlide]);

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Carousel Wrapper */}
      <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
        {testimonialCardData.map((data, index) => {
          const isCurrent = index === currentSlide;
          const isPrev =
            index === (currentSlide - 1 + testimonialCardData.length) % testimonialCardData.length;
          const isNext =
            index === (currentSlide + 1) % testimonialCardData.length;

          // Determine classes for positioning and visibility
          let positionClasses = "opacity-0 scale-75 z-0 translate-x-0";
          if (isCurrent) {
            positionClasses = "opacity-100 scale-100 z-20 translate-x-0";
          } else if (isPrev) {
            positionClasses = "opacity-50 scale-90 z-10 -translate-x-[100%]";
          } else if (isNext) {
            positionClasses = "opacity-50 scale-90 z-10 translate-x-[100%]";
          }

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 transform ${positionClasses}`}
            >
              <TestimonialCard
                icon={data.icon}
                description={data.description}
                name={data.name}
                title={data.title}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 z-30 transform -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 p-2 rounded-full"
      >
        <svg
          className="w-6 h-6 text-white dark:text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 z-30 transform -translate-y-1/2 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 p-2 rounded-full"
      >
        <svg
          className="w-6 h-6 text-white dark:text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 9l4-4-4-4"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {testimonialCardData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;