import { FunctionComponent, type CSSProperties } from "react";
import styles from "./ButtonGlass.module.css";

export type ButtonGlassType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonGlass: FunctionComponent<ButtonGlassType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.buttonGlass, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.buttonGlassChild} />
      <div className={styles.header}>Our Services</div>
      <img
        className={styles.arrowSmallUp11}
        alt=""
        src="/arrow-small-up-1-1@2x.png"
      />
    </button>
  );
};

export default ButtonGlass;
