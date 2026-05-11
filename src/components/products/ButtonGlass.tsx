import { FunctionComponent, type CSSProperties } from "react";
import styles from "./ButtonGlass.module.css";

export type ButtonGlassType = {
  className?: string;

  /** Variant props */
  property1?: string;
  onClick?: () => void;
};

const ButtonGlass: FunctionComponent<ButtonGlassType> = ({
  className = "",
  property1 = "Default",
  onClick,
}) => {
  return (
    <button
      className={[styles.buttonGlass, className].join(" ")}
      data-property1={property1}
      onClick={onClick}
    >
      <div className={styles.buttonGlassChild} />
      <div className={styles.header}>Explore Products</div>
      <img
        className={styles.arrowSmallUp11}
        alt=""
        src="/arrow-small-up-1-1@2x.png"
      />
    </button>
  );
};

export default ButtonGlass;
