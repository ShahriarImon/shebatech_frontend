import { FunctionComponent, useState } from "react";
import FrameComponent1 from "./FrameComponent1";
import Component1 from "./Component1";
import styles from "./BottomFooter.module.css";

export type BottomFooterType = {
  className?: string;
};

const BottomFooter: FunctionComponent<BottomFooterType> = ({
  className = "",
}) => {
  const [frameComponent1Items] = useState([
    {
      frameDivMinWidth: "14.5rem" as const,
      frameDivPadding: undefined,
      rectangleDivWidth: undefined,
      serviceNamePadding: "0rem 1.625rem 0rem 1.875rem" as const,
      title: "Scaling Across Industries",
      year: 2021,
      header:
        "Delivered ROBI ERL and began serving eKYC solutions to financial institutions and banks, widening our impact in the fintech ecosystem.",
    },
    {
      frameDivMinWidth: "14.5rem" as const,
      frameDivPadding: "2.062rem 0.812rem 4.375rem" as const,
      rectangleDivWidth: "19.25rem" as const,
      serviceNamePadding: "0rem 3.687rem 0rem 3.937rem" as const,
      title: "A Year of Growth",
      year: 2024,
      header:
        "Launched Resource Augmentation Services and introduced two new products: TMS, DMS ",
    },
    {
      frameDivMinWidth: "14.5rem" as const,
      frameDivPadding: undefined,
      rectangleDivWidth: undefined,
      serviceNamePadding: "0rem 4.562rem 0rem 4.75rem" as const,
      title: "Global Impact",
      year: 2025,
      header:
        "Provided eKYC technology for the Election Commission’s “Out-of-Country Voting System”, empowering secure voter verification for citizens abroad.",
    },
  ]);
  return (
    <div className={[styles.bottomFooter, className].join(" ")}>
      <div className={styles.outerFooter}>
        <section className={styles.partnerSummary}>
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
        </section>
        <section className={styles.actionArea}>
          <div className={styles.letsStartSomethingGreatToParent}>
            <h1 className={styles.letsStartSomethingContainer}>
              <span>
                {`LET’S START `}
                <br />
                {`SOMETHING `}
              </span>
              <span className={styles.great}>
                GREAT
                <br />
              </span>
              <span> TOGETHER</span>
            </h1>
            <div className={styles.contactButton}>
              <Component1 property1="Frame 4161" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BottomFooter;
