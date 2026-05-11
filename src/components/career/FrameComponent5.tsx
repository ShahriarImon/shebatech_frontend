import { FunctionComponent } from "react";
import ApplyButton from "./ApplyButton";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent5.module.css";
import { useNavigate } from "react-router-dom";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <section className={[styles.availableJobsWrapper, className].join(" ")}>
      <div className={styles.availableJobs}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>Current Openings</h2>
          <div
            className={styles.header2}
          >{`We are the best custom software development company for custom software development outsourcing. `}</div>
        </div>
        <div className={styles.availableJobsInner}>
          <div className={styles.frameParent}>
            <section className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameGroup}>
                <div className={styles.seniorBackendDeveloperWrapper}>
                  <h3 className={styles.seniorBackendDeveloper}>
                    Senior Backend Developer
                  </h3>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.bolt1Wrapper}>
                      <img
                        className={styles.bolt1Icon}
                        alt=""
                        src="/bolt-1.svg"
                      />
                    </div>
                    <div className={styles.yearsExperience}>
                      5+ Years Experience
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.calendarDay1Wrapper}>
                      <img
                        className={styles.calendarDay1Icon}
                        loading="lazy"
                        alt=""
                        src="/calendar-day-1.svg"
                      />
                    </div>
                    <div className={styles.yearsExperience}>10 Dec 2025</div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.applyButtonWrapper}> */}
              <ApplyButton
                property1="Default"
                handleApplyClick={() => navigate("/career/backend-dev")}
              />
              {/* </div> */}
            </section>
            <FrameComponent
              flutterDeveloper="Flutter Developer"
              yearsExperience="2+ Years Experience"
              dec2025="10 Dec 2025"
              property1="Default"
              handleApplyClick={() => navigate("/career/flutter-dev")}
            />
            <FrameComponent
              frameDivGap="3.375rem"
              frameDivMinWidth="7rem"
              frameDivAlignSelf="unset"
              frameDivPadding="0rem 0.062rem"
              flutterDeveloper="Data Analyst"
              frameDivAlignSelf1="stretch"
              yearsExperience="3+ Years Experience"
              dec2025="15 Dec 2025"
              property1="Default"
              handleApplyClick={() => navigate("/career/data-analyst")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
