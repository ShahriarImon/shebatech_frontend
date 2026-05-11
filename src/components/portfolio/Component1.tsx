import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
  btnTitle?: string;
  btnIcon?: string;
  onClick?: () => void;
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Frame 4161",
  btnTitle = "Get In Touch",
  btnIcon = "/arrow-square-9.svg",
  onClick,
}) => {
  return (
    <button
      className={[styles.component2, className].join(" ")}
      data-property1={property1}
      onClick={onClick}
    >
      <div className={styles.buttonBackgroundParent}>
        <div className={styles.buttonBackground} />
        <div className={styles.getInTouch}>{btnTitle}</div>
        <div className={styles.arrowSquare9Wrapper}>
          <img className={styles.arrowSquare9} alt="" src={btnIcon} />
        </div>
      </div>
    </button>
  );
};

export default Component1;
