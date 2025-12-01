
'use client';

import { useState } from 'react';

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image container with transition */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index < currentIndex
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
            style={{ backgroundColor: '#4494D0' }}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2E3191] rounded-full p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2E3191] rounded-full p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#2E3191] w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Gallery = () => {
  // Sample images - replace with your actual image paths
  const galleryImages = [
    '/assets/gallery-1.jpg',
    '/assets/gallery-2.jpg',
    '/assets/gallery-3.jpg',
    '/assets/gallery-4.jpg',
  ];

  return (
    <div className="px-40 py-20 flex flex-col gap-12 bg-white">
      <h2 className="text-[#2E3191] text-6xl font-bold">Event Gallery</h2>
      <div>
        <Carousel images={galleryImages} />
      </div>
    </div>
  );
};
