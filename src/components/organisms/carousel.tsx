'use client';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// docs https://react-slick.neostack.com/docs/api

interface CarouselProps {
  dots?: boolean;
  speed?: number;
  children: React.ReactNode;
  autoplay?: boolean;
  slidesToScroll?: number;
  slidesToShow?: number;
  className?: string;
  centerMode?: boolean;
  infinite?: boolean;
  arrows?: boolean;
  adaptiveHeight?: boolean;
  lazyLoad?: 'ondemand' | 'progressive';
}

export function Carousel({ children, ...settings }: CarouselProps) {
  const { width } = useWindowSize();

  if (width < 900) {
    settings = {
      ...settings,
      slidesToShow: 1,
      dots: true,
      speed: 500,
      lazyLoad: 'progressive',
    };
  } else {
    settings = {
      ...settings,
      slidesToShow: 3,
    };
  }

  return <Slider {...settings}>{children}</Slider>;
}
