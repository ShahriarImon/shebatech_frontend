import { FunctionComponent, useState } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const [frameComponentItems] = useState([
    {
      frameDivMinWidth: "19.125rem" as const,
      rectangle2855: "/Rectangle-2855@2x.png",
      header: "eKYC",
      header1: "Electronic Know Your Customer",
      headerWidth: undefined,
      headerDisplay: undefined,
      to: "/products/ekyc",
    },
    {
      frameDivMinWidth: undefined,
      rectangle2855: "/Rectangle-2858@2x.png",
      header: "LMS",
      header1: "Learning Management System",
      headerWidth: undefined,
      headerDisplay: undefined,
      to: "/products/lms",
    },
    {
      frameDivMinWidth: undefined,
      rectangle2855: "/Rectangle-2856@2x.png",
      header: "HRMS",
      header1: "Human Resource Management System",
      headerWidth: "20.125rem" as const,
      headerDisplay: "inline-block" as const,
      to: "/products/hrms",
    },
    {
      frameDivMinWidth: "undefined",
      rectangle2855: "/Rectangle-2860@2x.png",
      header: "DMS",
      header1: "Document Management System",
      headerWidth: "unset",
      headerDisplay: "unset",
      to: "/products/dms",
    },
    {
      frameDivMinWidth: "undefined",
      rectangle2855: "/Rectangle-2861@2x.png",
      header: "TMS",
      header1: "Task Management System",
      headerWidth: "unset",
      headerDisplay: "unset",
      to: "/products/tms",
    },
    {
      frameDivMinWidth: "undefined",
      rectangle2855: "/videoAnalytics.jpg",
      header: "Video Analytics",
      // header1: "Task Management System",
      headerWidth: "unset",
      headerDisplay: "unset",
      to: "/products/videoAnalytics",
    },
  ]);
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <header className={styles.headerParent}>
        <h2 className={styles.header}>Our Products</h2>
        <div className={styles.header2}>
          A comprehensive set of enterprise solutions designed to automate
          workflows, improve efficiency, and drive smarter decision-making.
        </div>
      </header>
      <div className={styles.frameGroup}>
        <div className={"grid grid-cols-3 gap-8 w-full"}>
          {frameComponentItems.map((item, index) => (
            <FrameComponent
              key={index}
              frameDivMinWidth={item.frameDivMinWidth}
              rectangle2855={item.rectangle2855}
              header={item.header}
              header1={item.header1}
              headerWidth={item.headerWidth}
              headerDisplay={item.headerDisplay}
              to={item.to}
            />
          ))}
        </div>
        {/* <section className={styles.frameSection}>
          <FrameComponent
            frameDivMinWidth="16.563rem"
            rectangle2855="/Rectangle-2860@2x.png"
            header="DMS"
            header1="Document Management System"
            headerWidth="unset"
            headerDisplay="unset"
            to={"/products/dms"}
          />
          <FrameComponent
            frameDivMinWidth="16.563rem"
            rectangle2855="/Rectangle-2861@2x.png"
            header="TMS"
            header1="Task Management System"
            headerWidth="unset"
            headerDisplay="unset"
            to={"/products/tms"}
          />
        </section> */}
      </div>
    </div>
  );
};

export default FrameComponent2;
