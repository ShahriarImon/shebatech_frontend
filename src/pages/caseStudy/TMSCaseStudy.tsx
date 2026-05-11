import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./TMSCaseStudy.module.css";

const Features = [
  { first_title: "Task Creation", second_title: "& Assignment" },
  { first_title: "Task Status ", second_title: "Tracking" },
  { first_title: "Progress Analytics", second_title: "Dashboard" },
  { first_title: "Personalized", second_title: "Task Lists" },
  { first_title: "Priority", second_title: "Management" },
  { first_title: "Notifications &", second_title: "Updates" },
  { first_title: "Detailed", second_title: "Task View" },
];

const TMSCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/taskManagement.jpg"
            communityIcon="/hr-group-1.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Task Management System (TMS)"}
        description={
          "The Task Management System is a productivity-focused digital solution designed to help individuals and teams plan, track, and complete tasks efficiently. The system provides real-time progress insights, clear task ownership, and an intuitive workflow that reduces confusion and improves accountability."
        }
        companyImages={[
          "/tmsCompany1.jpg",
          "/tmsCompany2.jpg",
          "/tmsCompany3.jpg",
          "/tmsCompany4.jpg",
        ]}
        projectDetails={[
          { label: "Client", value: "Sheba Group" },
          { label: "Industry", value: "Enterprise Software" },
          { label: "Platform", value: "Web, App" },
        ]}
      />
      <FrameComponent4
        className={styles.snapSection}
        sections={[
          {
            title: "The Challenge",
            items: [
              {
                header:
                  "Documents scattered across emails, drives, and paper files",
                // header1:
                //   "Manual HR processes such as attendance tracking, leave management, and payroll calculations",
              },
              {
                header: "Difficulty in Tracking and Retrieving Documents",
                // header1:
                //   "Data inconsistency and errors caused by maintaining employee records across multiple files",
              },
              {
                header: "Lack of document security and access control",
                // header1:
                //   "Lack of real-time visibility into workforce data, performance, and compliance",
              },
              {
                header: "Manual approval and sharing processes",
                // header1:
                //   "Time-consuming approvals for leave, reimbursements, and HR requests",
              },
              {
                header: "Risk of data loss and compliance issues",
                // header1:
                //   "Limited employee self-service, resulting in frequent HR dependency for basic information",
              },
            ],
          },
          {
            title: "Our Solution",
            items: [
              {
                header: "Centralized digital document repository",
                // header1:
                //   "A single source of truth for employee profiles, documents, and employment history.",
              },
              {
                header: "Version control with document history tracking",
                // header1:
                //   "Real-time tracking, configurable leave policies, and seamless approval workflows.",
              },
              {
                header: "Role-based access and secure permissions",
                // header1:
                //   "Accurate salary processing with tax, deductions, and statutory compliance support.",
              },
              {
                header: "Automated document approval workflows",
                // header1:
                //   "Employees can apply for leave, access payslips, update personal details, and track requests independently.",
              },
              {
                header: "Quick search, retrieval, and audit-ready storage",
                // header1:
                //   "Actionable insights through real-time analytics, HR metrics, and downloadable reports.",
              },
            ],
          },
        ]}
      />

      <FrameComponent5 Features={Features} className={styles.snapSection} />
      <TechnologiesUsed className={styles.snapSection} />
      <UserForm
        isHrms={true}
        className={styles.snapSection}
        title={"Get the TMS Solution"}
        subtitlePart1={
          "Streamline your HR operations with our all-in-one HRMS."
        }
        subtitlePart2={
          "Fill out the form below and our team will contact you shortly."
        }
      />
      <FrameComponent6 className={styles.snapSection} />
    </div>
  );
};

export default TMSCaseStudy;
