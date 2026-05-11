import { FunctionComponent } from "react";
import DevelopmentSoftwarePair from "./DevelopmentSoftwarePair";
import styles from "./AiMachineLearning.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const AiMachineLearning: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialSummaryParent, className].join(" ")}>
      <section className={styles.testimonialSummary}>
        <h2 className={styles.header}>AI & Machine Learning</h2>
        <div className={styles.testimonialSubtitle}>
          <div
            className={styles.header2}
          >{`We are the best custom software development company for custom software development outsourcing.`}</div>
        </div>
      </section>
      <div className={styles.expertContainerParent}>
        <section className={styles.expertContainer}>
          <div className={styles.headerParent}>
            <h1 className={styles.header3}>
              Driving Innovation with <br /> Intelligent Automation
            </h1>
            <div className={styles.header4}>
              Harness the power of advanced algorithms and data-driven insights
              to transform your business operations. Our AI solutions streamline
              complex processes, enabling smarter decision-making and enhanced
              security through high-performance machine learning models.
            </div>
          </div>
          <div className={styles.expertContainerInner}>
            <div className={`grid grid-cols-2 gap-6 w-full `}>
              <DevelopmentSoftwarePair header="Face & fingerprint verification" />
              <DevelopmentSoftwarePair
                developmentSoftwarePairBackgroundColor="#41444f"
                rectangleDivBackgroundColor="#41444f"
                header="OCR & document intelligence"
              />{" "}
              <DevelopmentSoftwarePair
                developmentSoftwarePairBackgroundColor="#41444f"
                rectangleDivBackgroundColor="#41444f"
                header="Predictive analytics and forecasting"
              />
              <DevelopmentSoftwarePair
                developmentSoftwarePairBackgroundColor="#34373f"
                rectangleDivBackgroundColor="#34373f"
                header={`Compliance & Audit Tracking`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiMachineLearning;
