import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./BepCaseStudy.module.css";

const Features = [
  { first_title: "School Management", second_title: "" },
  { first_title: "Teacher & Student", second_title: "Management" },
  { first_title: "Student Assessment", second_title: "" },
  { first_title: "Data Collection", second_title: "" },
  { first_title: "School Health", second_title: "" },
  { first_title: "School", second_title: "Attendance" },
  { first_title: "Field Visit", second_title: "Report" },
  { first_title: "Infrastructure Report", second_title: "" },
];

const BepCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/bepBanner.png"
            communityIcon="/hr-group-1.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Brac Education Program (BEP)"}
        description={"A Management System for BRAC Education Program"}
        companyImages={["/bepPort1.jpg", "/bepPort2.jpg", "/bepPort3.jpg"]}
        projectDetails={[
          { label: "Client", value: "Bep" },
          { label: "Industry", value: "Enterprise Software" },
          { label: "Platform", value: "Web" },
        ]}
      />
      <FrameComponent4
        className={styles.snapSection}
        sections={[
          {
            title: "The Challenge",
            items: [
              {
                header: "Fragmented Education Data",
                header1:
                  "Managing school, teacher, student, and staff data across multiple systems caused operational complexity and data inconsistency.",
              },
              {
                header: "Manual Monitoring & Reporting",
                header1:
                  "Field-level reporting, attendance tracking, and performance monitoring relied heavily on manual processes, causing delays and errors.",
              },
              {
                header: "Limited Real-Time Visibility",
                header1:
                  "Decision-makers lacked centralized, real-time insights into program performance, school activities, and workforce data across regions.",
              },
              {
                header: "Complex Large-Scale Operations",
                header1:
                  "Handling data for thousands of schools, teachers, students, and staff required a scalable and highly structured management platform.",
              },
              {
                header: "Difficult Communication & Coordination",
                header1:
                  "Coordinating activities between headquarters, regional offices, field staff, and educational institutions was time-consuming and inefficient.",
              },
            ],
          },
          {
            title: "Our Solution",
            items: [
              {
                header: "Centralized MIS Platform",
                header1:
                  "Developed a centralized MIS platform to manage school, student, teacher, and staff data securely.",
              },
              {
                header: "Automated Monitoring & Reporting",
                header1:
                  "Enabled automated attendance tracking, data collection, reporting workflows, and performance monitoring to reduce manual effort.",
              },
              {
                header: "Real-Time Dashboard & Insights",
                header1:
                  "Provided real-time dashboards and analytics for faster decision-making and operational visibility.",
              },
              {
                header: "Scalable Education Management System",
                header1:
                  "Designed a scalable system to efficiently manage large-scale school, teacher, student, and workforce data.",
              },
              {
                header: "Role-Based Access & Workflow Management",
                header1:
                  "Implemented secure role-based access, approval workflows, and multi-level management processes for smooth coordination between teams.",
              },
            ],
          },
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />
      {/* <UserForm
        isHrms={true}
        className={styles.snapSection}
        title={"Get the TMS Solution"}
        subtitlePart1={
          "Streamline your HR operations with our all-in-one HRMS."
        }
        subtitlePart2={
          "Fill out the form below and our team will contact you shortly."
        }
      /> */}
      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default BepCaseStudy;
