import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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


export function CarouselGreenstash() {
    const images = [greenstash1, greenstash2, greenstash3, greenstash4, greenstash5, greenstash6]
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex md:basis-1/2 lg:basis-1/3 aspect-auto items-center justify-center p-1">
                  <img src={image} className="fill-background" style={{objectFit: 'cover', objectPosition: 'center'}} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function CarouselMyne() {
    const images = [myne1, myne2, myne3, myne4, myne5, myne6]
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, loop: true})
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      orientation="horizontal"
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex md:basis-1/2 lg:basis-1/3 aspect-auto items-center justify-center p-1">
                  <img src={image} className="fill-background" style={{objectFit: 'cover', objectPosition: 'center'}} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselFeatured() {
  const images = [itsfossnews]
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, loop: true})
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex md:basis-1/2 lg:basis-1/3 aspect-auto items-center justify-center p-1">
                  <img src={image} className="fill-background" style={{objectFit: 'cover', objectPosition: 'center'}} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}