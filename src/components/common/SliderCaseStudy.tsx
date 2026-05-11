import React, { ReactNode, useState } from "react";
import Slider from "react-slick";
import "./SliderCaseStudy.css";
type Props = {
  children: ReactNode;
};

const SliderCaseStudy = ({ children }: Props) => {
  const [ripples, setRipples] = useState<{ id: number; buttonId: string }[]>(
    [],
  );

  const createRipple = (buttonId: string) => {
    const newRipple = { id: Date.now() + Math.random(), buttonId };

    setRipples((prev: { id: number; buttonId: string }[]) => [
      ...prev,
      newRipple,
    ]);

    setTimeout(() => {
      setRipples((prev: { id: number; buttonId: string }[]) =>
        prev.filter((r) => r.id !== newRipple.id),
      );
    }, 600);
  };

  // const NextArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className={"rightArrow navButton"}
  //       onClick={(e) => {
  //         createRipple(e, "next");
  //         onClick && onClick(e);
  //       }}
  //     >
  //       {ripples
  //         .filter((r) => r.buttonId === "next")
  //         .map((ripple) => (
  //           <span
  //             key={ripple.id}
  //             className={"ripple"}
  //             style={{
  //               left: ripple.x,
  //               top: ripple.y,
  //             }}
  //           />
  //         ))}
  //       <div className={"iconContainer"}>
  //         <img
  //           loading="lazy"
  //           alt=""
  //           src="/rightA.svg"
  //           style={{ width: "8px" }}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  // const PrevArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className={"leftArrow navButton"}
  //       onClick={(e) => {
  //         createRipple(e, "prev");
  //         onClick && onClick(e);
  //       }}
  //     >
  //       {ripples
  //         .filter((r: any) => r.buttonId === "prev")
  //         .map((ripple: any) => (
  //           <span
  //             key={ripple.id}
  //             className={"ripple"}
  //             style={{
  //               left: ripple.x,
  //               top: ripple.y,
  //             }}
  //           />
  //         ))}
  //       <div className={"iconContainer"}>
  //         <img
  //           loading="lazy"
  //           alt=""
  //           src="/leftA.svg"
  //           style={{ width: "8px" }}
  //         />
  //       </div>
  //     </div>
  //   );
  // };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={"rightArrow navButton"}
        onClick={(e) => {
          createRipple("next");
          onClick && onClick(e);
        }}
      >
        {ripples
          .filter((r) => r.buttonId === "next")
          .map((ripple) => (
            <span key={ripple.id} className={"ripple"} />
          ))}
        <div className={"iconContainer"}>
          <img
            loading="lazy"
            alt=""
            src="/rightA.svg"
            style={{ width: "8px" }}
          />
        </div>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className={"leftArrow navButton"}
        onClick={(e) => {
          createRipple("prev");
          onClick && onClick(e);
        }}
      >
        {ripples
          .filter((r) => r.buttonId === "prev")
          .map((ripple) => (
            <span key={ripple.id} className={"ripple"} />
          ))}
        <div className={"iconContainer"}>
          <img
            loading="lazy"
            alt=""
            src="/leftA.svg"
            style={{ width: "8px" }}
          />
        </div>
      </div>
    );
  };

  var settings = {
    dots: true,
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
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderCaseStudy;
