import React, { ReactNode } from "react";
import Slider from "react-slick";
import "./SliderIdentity.css";
type Props = {
  children: ReactNode;
  afterChange?: (currentSlide: number) => void;
};

const SliderIdentity = ({ children, afterChange }: Props) => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={"rightArrow navButton"}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        <img
          loading="lazy"
          alt=""
          src="/prodRightArrow.svg"
          style={{ width: "22px" }}
        />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={"leftArrow navButton"}
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        <img
          loading="lazy"
          alt=""
          src="/prodLeftArrow.svg"
          style={{ width: "22px" }}
        />
      </div>
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
    waitForAnimate: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange,
  };
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderIdentity;
