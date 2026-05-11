import { FunctionComponent, type CSSProperties } from "react";
import styles from "./CardEd.module.css";

export type CardEdType = {
  className?: string;
  hoverTitle?: string;
  imagePath?: string;
  /** Variant props */
  property1?: string;
};

const CardEd: FunctionComponent<CardEdType> = ({
  className = "",
  property1 = "Default",
  imagePath,
  hoverTitle = "",
}) => {
  return (
    <div
      className={[styles.cardEd, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.cardEdChild}
        loading="lazy"
        alt=""
        src={imagePath}
      />
      <div className={styles.frameParent}>
        <div className={styles?.container}>
          <div className={styles.restaurantAppWrapper}>
            <div className={styles.restaurantApp}>HealthTech App</div>
          </div>
          <b className={styles.foodDeliveryService}>{hoverTitle}</b>
        </div>
      </div>
    </div>
  );
};

export default CardEd;
