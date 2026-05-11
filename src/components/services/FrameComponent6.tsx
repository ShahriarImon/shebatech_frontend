import { FunctionComponent } from "react";
import Component1 from "./Component1";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.letsConnectWrapper, className].join(" ")}>
      <div className={styles.letsConnect}>
        <h1 className={styles.letsStartSomethingContainer}>
          <span>
            {`LET’S START `}
            <br />
            {`SOMETHING `}
          </span>
          <span className={styles.great}>
            GREAT
            <br />
          </span>
          <span> TOGETHER</span>
        </h1>
        <div className={styles.contactButtonContainer}>
          <Component1 property1="Frame 4162" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
