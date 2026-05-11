import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/Rectangle280.png"
        />
        <section className={styles.frameGroup}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.header}>Who We Are</h2>
          </div>
          <div className={styles.header2}>
            We are a full-service software development company specializing in
            custom software, mobile applications, cloud solutions, and digital
            transformation services. With a multidisciplinary team of engineers,
            designers, and technology experts, we partner with businesses across
            industries to automate workflows, modernize systems, and create
            seamless digital experiences.
            <br />
            <br />
            We believe technology should simplify lives — not complicate them.
            That’s why every solution we build is crafted with clarity,
            performance, and user experience at the forefront.
          </div>
        </section>
      </div>
      <section className={styles.infoSummary}>
        <FrameComponent
          rectangle288="/ourMission.png"
          header="Our Mission"
          header1="Empowering businesses with custom software solutions and top-tier tech talent."
        />
        <FrameComponent
          rectangle288="/ourVision.png"
          frameDivWidth="13.563rem"
          header="Our Vision"
          header1="To build a smarter more connected Bangladesh by becoming the leading provider of software and IT resources."
          headerWidth="31.063rem"
        />
      </section>
    </section>
  );
};

export default FrameComponent3;
