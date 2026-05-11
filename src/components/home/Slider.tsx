import { FunctionComponent } from "react";
import styles from "./Slider.module.css";

export type SliderType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Slider: FunctionComponent<SliderType> = ({
  className = "",
  property1 = "Frame 4161",
}) => {
  const clients = [
    "/gp.png",
    "/brac.png",
    "/hsbc.png",
    "/bkash.png",
    "/ucb.png",
  ];
  return (
    <div
      className={[styles.slider, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.frameParent}>
        {clients?.map((client, index) => (
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            key={index}
            src={client}
          />
        ))}

        {/************************  Duplicates *****************************/}

        {clients?.map((client, index) => (
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            key={index}
            src={client}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
