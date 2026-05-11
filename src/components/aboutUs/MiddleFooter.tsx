import { FunctionComponent, useState } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./MiddleFooter.module.css";

export type MiddleFooterType = {
  className?: string;
};

const MiddleFooter: FunctionComponent<MiddleFooterType> = ({
  className = "",
}) => {
  const [frameComponent1Items] = useState([
    {
      frameDivMinWidth: "17.5rem" as const,
      frameDivPadding: "1.937rem 0.875rem 3.062rem" as const,
      rectangleDivWidth: "19.313rem" as const,
      serviceNamePadding: "0rem 4.562rem 0rem 4.812rem" as const,
      title: "The Beginning",
      year: 2015,
      header:
        "Our journey started in 2015 with the successful launch of the GP Blue Box project — the foundation that set our vision in motion.",
    },
    {
      frameDivMinWidth: undefined,
      frameDivPadding: "2.062rem 0.812rem 4.375rem" as const,
      rectangleDivWidth: "19.25rem" as const,
      serviceNamePadding: "0rem 2.437rem 0rem 2.75rem" as const,
      title: "Expanding Innovation",
      year: 2017,
      header:
        "Delivered a secure and scalable eKYC solution for Robi, marking our entry into large-scale telecom solutions.",
    },
    {
      frameDivMinWidth: undefined,
      frameDivPadding: undefined,
      rectangleDivWidth: undefined,
      serviceNamePadding: "0rem 0.687rem 0rem 0.937rem" as const,
      title: "Strengthening Our Footprint",
      year: 2018,
      header:
        "Implemented a comprehensive eKYC platform for Banglalink, elevating our capabilities in digital verification technology.",
    },
    {
      frameDivMinWidth: undefined,
      frameDivPadding: "2.062rem 0.812rem 4.375rem" as const,
      rectangleDivWidth: "19.25rem" as const,
      serviceNamePadding: "0rem 1.062rem 0rem 1.375rem" as const,
      title: "Building Our Own Products",
      year: 2020,
      header:
        "Introduced our in-house HRMS platform, expanding into enterprise-grade product development.",
    },
  ]);
  return (
    <div className={[styles.middleFooter, className].join(" ")}>
      <section className={styles.serviceList}>
        <div className={styles.headerParent}>
          <h2 className={styles.header2}>Our Journey</h2>
          <div
            className={styles.header3}
          >{`We are the best custom software development company for custom software development outsourcing. `}</div>
        </div>
        <div className={styles.serviceSummary}>
          {frameComponent1Items.map((item, index) => (
            <FrameComponent1
              key={index}
              frameDivMinWidth={item.frameDivMinWidth}
              frameDivPadding={item.frameDivPadding}
              rectangleDivWidth={item.rectangleDivWidth}
              serviceNamePadding={item.serviceNamePadding}
              header={item.header}
              title={item.title}
              year={item.year}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MiddleFooter;
