/* eslint-disable prettier/prettier */
import * as breakpoints from 'breakpoints';

export const slideSettings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  responsive: [
    {
      breakpoint: breakpoints.lg,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: breakpoints.md,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: breakpoints.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
