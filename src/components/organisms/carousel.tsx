'use client';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// docs https://react-slick.neostack.com/docs/api

interface CarouselProps {
  children: React.ReactNode;
  className?: string;

  arrows?: boolean;
  dots?: boolean;
  dotsClass?: string;

  infinite?: boolean;
  speed?: number;
  autoplaySpeed?: number;
  autoplay?: boolean;

  lazyLoad?: 'ondemand' | 'progressive';
  slidesToScroll?: number;
  slidesToShow?: number;
  centerMode?: boolean;
  adaptiveHeight?: boolean;
}

export function Carousel({ children, ...settings }: CarouselProps) {
  const { width } = useWindowSize();

  if (width < 900) {
    settings = {
      ...settings,
      slidesToShow: 1,
    };
  } else {
    settings = {
      ...settings,
      slidesToShow: 3,
    };
  }

  return <Slider {...settings}>{children}</Slider>;
}
