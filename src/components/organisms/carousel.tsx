'use client';
import Slider from 'react-slick';
import { useWindowSize } from '@/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// docs https://react-slick.neostack.com/docs/api

interface CarouselProps {
  dots: boolean;
  speed: number;
  children: React.ReactNode;
  autoplay?: boolean;
  slidesToScroll?: number;
  slidesToShow?: number;
  className?: string;
  centerMode?: boolean;
  infinite?: boolean;
  arrows?: boolean;
  adaptiveHeight?: boolean;
}

export function Carousel({ children, slidesToShow, autoplay, infinite, ...settings }: CarouselProps) {
  const { width } = useWindowSize();

  if (width < 900) {
    slidesToShow = 1;
    autoplay = true;
    infinite = true;
  } else {
    slidesToShow = slidesToShow || 3;
  }

  return (
    <Slider {...settings} slidesToShow={slidesToShow}>
      {children}
    </Slider>
  );
}
