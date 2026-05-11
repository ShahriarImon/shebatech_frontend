import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./HRMSCaseStudy.module.css";

const Features = [
  { first_title: "Smart", second_title: "Dashboard" },
  { first_title: "Attendance", second_title: "Management" },
  { first_title: "Leave", second_title: "Management" },
  { first_title: "Organization", second_title: "Management" },
  { first_title: "Employee", second_title: "Management" },
  { first_title: "Approval", second_title: "Workflow" },
  { first_title: "Payroll", second_title: "Management" },
];

const HRMSCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/hrms.jpg"
            communityIcon="/hr-group-1.svg"
          />
        </div>
      </section>
      <FrameComponent3 className={styles.snapSection} />
      <FrameComponent4 className={styles.snapSection} />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />
      <UserForm isHrms={true} className={styles.snapSection} />
      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default HRMSCaseStudy;
