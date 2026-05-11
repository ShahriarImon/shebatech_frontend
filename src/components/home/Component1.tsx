import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Component1.module.css";
import { useNavigate } from "react-router-dom";

export type Component1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Frame 4161",
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={[styles.component2, className].join(" ")}
      data-property1={property1}
    >
      <div
        className={styles.rectangleParent}
        onClick={() => navigate("/contactUs")}
      >
        <div className={styles.frameChild} />
        <div className={styles.getInTouch}>Get In Touch</div>
        <div className={styles.arrowSquare9Wrapper}>
          <img
            className={styles.arrowSquare9}
            alt=""
            src="/arrow-square-9.svg"
          />
        </div>
      </div>
    </button>
  );
};

export default Component1;
