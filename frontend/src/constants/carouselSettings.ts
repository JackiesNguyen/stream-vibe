export const SLIDES_TO_SHOW_DEFAULT = 4

export const SLIDES_TO_SHOW_RESPONSIVE = 5

export const carouselSettings = (slidesToShow: number) => ({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: slidesToShow || SLIDES_TO_SHOW_DEFAULT,
  slidesToScroll: 5,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: slidesToShow || SLIDES_TO_SHOW_DEFAULT,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dotsClass: 'slick-dots slick-thumb',
      },
    },
  ],
})
