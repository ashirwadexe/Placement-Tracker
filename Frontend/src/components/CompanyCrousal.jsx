import React from 'react';
import companyLogo from "../data/companyLogo.json";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

function CompanyCrousal() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-semibold'>Our Top Reqruiters</h1>
      <Carousel
        loop={true} // Enable looping
        plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]} // Autoplay settings
        className="w-full pt-10 pb-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {/* Double the items to create a continuous, seamless effect */}
          {[...companyLogo, ...companyLogo].map(({ name, id, path }, index) => (
            <CarouselItem key={`${id}-${index}`} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CompanyCrousal;