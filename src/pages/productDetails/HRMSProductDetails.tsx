import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/ProductDetails/FrameComponent2";
import FrameComponent3 from "../../components/ProductDetails/FrameComponent3";
import FrameComponent4 from "../../components/ProductDetails/FrameComponent4";
import FrameComponent5 from "../../components/ProductDetails/FrameComponent5";
import TechnologiesUsed from "../../components/ProductDetails/TechnologiesUsed";
import UserForm from "../../components/ProductDetails/UserForm";
import FrameComponent6 from "../../components/ProductDetails/FrameComponent6";
import styles from "./HRMSProductDetails.module.css";
import ProductCTA from "../../components/products/ProductCTA";

const Features = [
  { first_title: "360° Employee", second_title: "Overview" },
  { first_title: "Payroll & Benefits", second_title: "Automation" },
  { first_title: "Attendance &", second_title: "Leave Tracking" },
  { first_title: "Performance", second_title: "Management" },
  { first_title: "Employee & Asset", second_title: "Management" },
  { first_title: "Smart Mobile", second_title: "Attendance" },
  { first_title: "Remote Attendance", second_title: "with Location Control" },
];

const HRMSProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/hrmsProdHero.jpg"
            communityIcon="/productDetailsShortIcon.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        projectDetails={[
          { label: "Client", value: "Sheba Group" },
          { label: "Industry", value: "Enterprise Software" },
          { label: "Platform", value: "Web, Android & iOS" },
        ]}
        description={
          "Manage your workforce with efficiency and clarity. Streamline HR operations from recruitment to payroll in one unified platform."
        }
      />
      {/* <FrameComponent4 className={styles.snapSection} /> */}

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />
      {/* <div className={styles.con2}> */}
      {/* <ProductCTA /> */}
      {/* </div> */}
      {/* <UserForm isHrms={true} className={styles.snapSection} /> */}
      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default HRMSProductDetails;
