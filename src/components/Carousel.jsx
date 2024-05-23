import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import greenstash1 from "../assets/greenstash/greenstash1.heif"
import greenstash2 from "../assets/greenstash/greenstash2.heif"
import greenstash3 from "../assets/greenstash/greenstash3.heif"
import greenstash4 from "../assets/greenstash/greenstash4.heif"
import greenstash5 from "../assets/greenstash/greenstash5.heif"
import greenstash6 from "../assets/greenstash/greenstash6.heif"

import myne1 from "../assets/myne/myne1.heif"
import myne2 from "../assets/myne/myne2.heif"
import myne3 from "../assets/myne/myne3.heif"
import myne4 from "../assets/myne/myne4.heif"
import myne5 from "../assets/myne/myne5.heif"
import myne6 from "../assets/myne/myne6.heif"

import itsfossnews from "../assets/featured/itsfossnews.heif"
import androidauthority from "../assets/featured/androidauthority.heif"

const greenstashImages = [greenstash1, greenstash2, greenstash3, greenstash4, greenstash5, greenstash6]
const myneImages = [myne1, myne2, myne3, myne4, myne5, myne6]
const featuredImages = [itsfossnews, androidauthority]

// import { greenstashImages } from '../assets/greenstash';
// import { myneImages } from '../assets/myne';
// import { featuredImages } from '../assets/featured';

// Single Carousel Component
function ImageCarousel({ images }) {
    const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false, loop: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
        slidesToScroll: 1,
        slidesToShow: 1,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className="carousel sm:w-3/4 md:w-1/3 lg:w-1/3 xl:w-1/3"
    >
      <CarouselContent>
        {Object.values(images).map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-0 shadow-none">
                <CardContent className="flex md:basis-1/2 lg:basis-1/3 aspect-auto items-center justify-center p-1">
                  <img
                    src={image}
                    className="fill-background rounded-sm max-h-[50rem] md:max-h-[35rem] "
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export const CarouselGreenstash = () => {
  return <ImageCarousel images={greenstashImages} />;
};

export const CarouselMyne = () => {
  return <ImageCarousel images={myneImages} />;
};

export function CarouselFeatured() {
  const images = featuredImages
  return (
    <Carousel
      opts={{
        loop: true,
        slidesToScroll: 1,
        slidesToShow: 1,
      }}
      orientation="vertical"
      className="mx-auto w-2/3 max-w-lg sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 basis-full w-full">
            <Card className="bg-transparent border-0 shadow-none">
              <CardContent className="flex w-full basis-full aspect-auto items-center justify-center p-1">
                <img src={image} className="fill-background" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
