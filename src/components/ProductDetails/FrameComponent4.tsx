import { FunctionComponent, Fragment } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent4.module.css";

export type ChallengeSolutionItem = {
  header?: string;
  header1?: string;
  frameDivWidth?: any;
  frameDivPadding?: any;
};

export type ChallengeSolutionSection = {
  title: string;
  items: ChallengeSolutionItem[];
};

export type FrameComponent4Type = {
  className?: string;
  sections?: ChallengeSolutionSection[];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  sections = [
    {
      title: "The Challenge",
      items: [
        {
          header: "Manual Processes",
          header1:
            "Manual HR processes such as attendance tracking, leave management, and payroll calculations",
        },
        {
          header: "Data Inconsistency",
          header1:
            "Data inconsistency and errors caused by maintaining employee records across multiple files",
        },
        {
          header: "Lack of Real-Time Visibility",
          header1:
            "Lack of real-time visibility into workforce data, performance, and compliance",
        },
        {
          header: "Time-consuming",
          header1:
            "Time-consuming approvals for leave, reimbursements, and HR requests",
        },
        {
          header: "Limited Feature",
          header1:
            "Limited employee self-service, resulting in frequent HR dependency for basic information",
        },
      ],
    },
    {
      title: "Our Solution",
      items: [
        {
          header: "Centralized Employee Database",
          header1:
            "A single source of truth for employee profiles, documents, and employment history.",
        },
        {
          header: "Automated Attendance & Leave Management",
          header1:
            "Real-time tracking, configurable leave policies, and seamless approval workflows.",
        },
        {
          header: "Payroll & Compliance Automation",
          header1:
            "Accurate salary processing with tax, deductions, and statutory compliance support.",
        },
        {
          header: "Employee Self-Service Portal",
          header1:
            "Employees can apply for leave, access payslips, update personal details, and track requests independently.",
        },
        {
          header: "Performance & Reporting Dashboard",
          header1:
            "Actionable insights through real-time analytics, HR metrics, and downloadable reports.",
        },
      ],
    },
  ],
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      {sections.map((section, sIdx) => (
        <Fragment key={sIdx}>
          <div
            className={
              sIdx === 0 ? styles.rectangleWrapper : styles.rectangleContainer
            }
          >
            <div className={styles.frameChild} />
          </div>
          <section className={styles.headerParent}>
            <h2 className={styles.header}>{section.title}</h2>
            {section.items.map((item, iIdx) => (
              <FrameComponent
                key={iIdx}
                frameDivWidth={item.frameDivWidth}
                header={item.header}
                frameDivPadding={item.frameDivPadding}
                header1={item.header1}
              />
            ))}
          </section>
        </Fragment>
      ))}
    </section>
  );
};

export default FrameComponent4;
