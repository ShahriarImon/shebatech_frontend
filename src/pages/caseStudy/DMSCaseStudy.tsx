import { FunctionComponent } from "react";
import FrameComponent2 from "../../components/HRMSCaseStudy/FrameComponent2";
import FrameComponent3 from "../../components/HRMSCaseStudy/FrameComponent3";
import FrameComponent4 from "../../components/HRMSCaseStudy/FrameComponent4";
import FrameComponent5 from "../../components/HRMSCaseStudy/FrameComponent5";
import TechnologiesUsed from "../../components/HRMSCaseStudy/TechnologiesUsed";
import UserForm from "../../components/HRMSCaseStudy/UserForm";
import FrameComponent6 from "../../components/HRMSCaseStudy/FrameComponent6";
import styles from "./DMSCaseStudy.module.css";

const Features = [
  { first_title: "Document", second_title: "Scanning" },
  { first_title: "Document Storage", second_title: "and Organization" },
  { first_title: "OCR API", second_title: "Integration" },
  { first_title: "System Log", second_title: "" },
  { first_title: "Access Privilege", second_title: "Settings" },
  { first_title: "Version Control", second_title: "" },
  { first_title: "Dynamic Search", second_title: "" },
];

const DMSCaseStudy: FunctionComponent = () => {
  return (
    <div className={styles.hrmsCaseStudy}>
      <section className={`${styles.caseStudy} ${styles.snapSection}`}>
        <div className={styles.frameParent}>
          <FrameComponent2
            dashboardIcon="/documentManagement.jpg"
            communityIcon="/hr-group-1.svg"
          />
        </div>
      </section>
      <FrameComponent3
        className={styles.snapSection}
        title={"Document Management System (DMS)"}
        description={
          "All your business documents, organized and accessible from a single, secure digital platform."
        }
        companyImages={[
          "/DMSCompany1.jpg",
          "/DMSCompany2.jpg",
          "/DMSCompany3.jpg",
          "/DMSCompany4.jpg",
        ]}
        projectDetails={[
          { label: "Client", value: "Fast Finance" },
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
        title={"Get the DMS Solution"}
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

export default DMSCaseStudy;
