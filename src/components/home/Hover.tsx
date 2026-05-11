import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Hover.module.css";

export type HoverType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Hover: FunctionComponent<HoverType> = ({
  className = "",
  property1 = "Group 37",
}) => {
  return (
    <div
      className={[styles.hover, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.hoverChild}
        loading="lazy"
        alt=""
        src="/Rectangle-203@2x.png"
      />
    </div>
  );
};

export default Hover;
