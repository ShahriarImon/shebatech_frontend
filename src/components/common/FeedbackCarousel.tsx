import React, { ReactNode } from "react";
import Slider from "react-slick";
import "./FeedbackCarousel.css";
type Props = {
  children: ReactNode;
};

const FeedbackCarousel = ({ children }: Props) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <img
        loading="lazy"
        alt=""
        src="/rightFeedArrow.svg"
        onClick={onClick}
        className={"rightArrow"}
      />
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <img
        loading="lazy"
        alt=""
        src="/leftFeedArrow.svg"
        onClick={onClick}
        className={"leftArrow"}
      />
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default FeedbackCarousel;
