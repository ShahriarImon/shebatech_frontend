import { FunctionComponent } from "react";
import DevelopmentSoftwarePair from "./DevelopmentSoftwarePair";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialSummaryParent, className].join(" ")}>
      <section className={styles.testimonialSummary}>
        <h2 className={styles.header}>Resource Augmentation</h2>
        <div className={styles.testimonialSubtitle}>
          <div
            className={styles.header2}
          >{`Extend your workforce with top-tier tech talent — seamlessly integrated into your team. `}</div>
        </div>
      </section>
      <div className={styles.expertContainerParent}>
        <section className={styles.expertContainer}>
          <div className={styles.headerParent}>
            <h1 className={styles.header3}>
              Scale Your Team with <br />
              On-Demand Expertise
            </h1>
            <div className={styles.header4}>
              Our resource augmentation model empowers organizations to access
              top-tier professionals who work as an extension of their internal
              team. Whether scaling for a new project or strengthening ongoing
              operations, we deliver the right skills at the right time.
            </div>
          </div>
          <div className={styles.expertContainerInner}>
            <div className={`grid grid-cols-2 gap-6 w-full `}>
              <DevelopmentSoftwarePair header="2  Weeks Deployment" />
              <DevelopmentSoftwarePair
                developmentSoftwarePairBackgroundColor="#41444f"
                rectangleDivBackgroundColor="#41444f"
                header="Flexible Onboarding Models"
              />{" "}
              <DevelopmentSoftwarePair
                developmentSoftwarePairBackgroundColor="#41444f"
                rectangleDivBackgroundColor="#41444f"
                header="Attractive Rates"
              />
              <DevelopmentSoftwarePair
                developmentSoftwarePairBackgroundColor="#34373f"
                rectangleDivBackgroundColor="#34373f"
                header={`Available Resources to Support Different Time Zone`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrameComponent5;
