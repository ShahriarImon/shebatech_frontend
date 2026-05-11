import { FunctionComponent, Fragment } from "react";
import styles from "./FrameComponent3.module.css";

export type ProjectDetail = {
  label: string;
  value: string;
};

export type FrameComponent3Type = {
  className?: string;
  title?: string;
  description?: string;
  projectDetails?: ProjectDetail[];
  companyImages?: string[];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  title = "Human Resource Management System (HRMS)",
  description = "We are the best custom software development company for custom software development outsourcing.",
  projectDetails = [
    { label: "Client", value: "Sheba Group" },
    { label: "Industry", value: "Enterprise Software" },
    { label: "Platform", value: "Web & Mobile" },
  ],
  companyImages = [
    "/Company-Head-1@2x.png",
    "/Company-Head-2@2x.png",
    "/Company-Head-3@2x.png",
    "/Company-Head-4@2x.png",
  ],
}) => {
  return (
    <main className={[styles.hrmsCaseStudyInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.firstHeaderParent}>
          <div className={styles.firstHeader}>
            <h2 className={styles.header}>{title}</h2>
          </div>
          <div className={styles.header2}>{description}</div>
        </div>
        <section className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            {projectDetails.map((detail, index) => (
              <Fragment key={index}>
                <div className={styles.headerWrapper}>
                  <div className={styles.header3}>
                    <span>
                      {detail.label}
                      <br />
                    </span>
                    <span className={styles.shebaGroup}>{detail.value}</span>
                  </div>
                </div>
                {index < projectDetails.length - 1 && (
                  <div className={styles.divider} />
                )}
              </Fragment>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-3 gap-8">
          {companyImages?.map((img, idx) => (
            <img
              key={idx}
              className={styles.companyHead1}
              loading="lazy"
              alt=""
              src={img}
            />
          ))}
        </div>
        {/* <div className={styles.companyItems2}>
          <div className={styles.companyHead3Parent}>
            {companyImages.slice(2, 4).map((img, idx) => (
              <img
                key={idx}
                className={styles.companyHead1}
                loading="lazy"
                alt=""
                src={img}
              />
            ))}
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default FrameComponent3;
