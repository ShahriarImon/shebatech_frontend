import { FunctionComponent } from "react";
import Slider from "./Slider";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.trustedByLeadingClientsParent}>
          <h2 className={styles.trustedByLeading}>
            Trusted by Leading Clients
          </h2>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              Empowering top businesses with reliable, innovative solutions that
              deliver results and the confidence of a proven partner.
            </div>
          </div>
        </div>
        <Slider property1="Frame 4161" />
      </div>
    </section>
  );
};

export default FrameComponent3;
