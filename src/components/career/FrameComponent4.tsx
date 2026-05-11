import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.careerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>{`Perks & Benefits`}</h2>
          <div
            className={styles.header2}
          >{`We are the best custom software development company for custom software development outsourcing. `}</div>
        </div>
        <section className={styles.salaryPerks}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.bonus1Icon}
                  alt=""
                  src="/sack-dollar-2-1.svg"
                />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>Competitive Salary</h3>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/calendar-2.svg"
                />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>
                  Carry Forward Leave
                </h3>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img className={styles.desk1Icon} alt="" src="/desk-1.svg" />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>
                  Friendly Environment
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.frameParent4}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img className={styles.bonus1Icon} alt="" src="/bonus-1.svg" />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>Festival Bonus</h3>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/bench-tree-1.svg"
                />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>
                  Quarterly Team Outings
                </h3>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/calendar-2.svg"
                />
              </div>
              <div className={styles.annualLeaveWrapper}>
                <h3 className={styles.annualLeave}>Annual Leave</h3>
              </div>
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/employee-performance-1.svg"
                />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>Performance Bonus</h3>
              </div>
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/plate-utensils-1.svg"
                />
              </div>
              <div className={styles.salaryDetails}>
                <h3 className={styles.competitiveSalary}>Lunch Facilities</h3>
              </div>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img className={styles.refer7Icon} alt="" src="/refer-7.svg" />
              </div>
              <div className={styles.knowledgeSharingSessionWrapper}>
                <h3 className={styles.annualLeave}>
                  Knowledge Sharing Session
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.wellnessPerks}>
            <div className={styles.frameParent11}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/plane-globe-1.svg"
                />
              </div>
              <div className={styles.wellnessDetails}>
                <h3
                  className={styles.annualLeave}
                >{`Annual Retreat & Family Tour
`}</h3>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/mug-tea-1.svg"
                />
              </div>
              <div className={styles.wellnessDetails}>
                <h3 className={styles.annualLeave}>Unlimited Tea, Coffee.</h3>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img className={styles.desk1Icon} alt="" src="/patient-1.svg" />
              </div>
              <div className={styles.wellnessDetails}>
                <h3 className={styles.annualLeave}>{`Casual & Sick Leave`}</h3>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/calendar-1.svg"
                />
              </div>
              <div className={styles.wellnessDetails}>
                <h3 className={styles.annualLeave}>Bereavement Leave</h3>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.improveUser6Icon}
                  alt=""
                  src="/improve-user-6.svg"
                />
              </div>
              <div className={styles.trainingAndLearningMaterialWrapper}>
                <div className={styles.trainingAndLearning}>
                  Training and Learning Materials to Improve Skills
                </div>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.calendar2Icon}
                  alt=""
                  src="/baby-1.svg"
                />
              </div>
              <div className={styles.wellnessDetails}>
                <h3 className={styles.annualLeave}>
                  Maternal and Parental Leave
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent4;
