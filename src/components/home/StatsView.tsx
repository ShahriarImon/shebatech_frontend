import { FunctionComponent, useState } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./StatsView.module.css";

export type StatsViewType = {
  className?: string;
};

const StatsView: FunctionComponent<StatsViewType> = ({ className = "" }) => {
  const [groupComponentItems] = useState([
    {
      groupDivPadding: "4.875rem 1.25rem 1.937rem 2.437rem" as const,
      metricsPlaceholders: "10",
      yearsOfExperience: "Years of Experience ",
    },
    {
      groupDivPadding: "4.875rem 1.25rem 1.937rem 2.375rem" as const,
      metricsPlaceholders: "40",
      yearsOfExperience: "Talented Employees",
    },
    {
      groupDivPadding: "4.875rem 2.5rem 1.937rem" as const,
      metricsPlaceholders: "25",
      yearsOfExperience: "Projects Delivered",
    },
    {
      groupDivPadding: "4.875rem 2.437rem 1.937rem" as const,
      metricsPlaceholders: "50+",
      yearsOfExperience: "Valued Clients",
    },
    {
      groupDivPadding: "4.875rem 1.25rem 1.937rem 2.375rem" as const,
      metricsPlaceholders: "25",
      yearsOfExperience: "Trusted Partners",
    },
    {
      groupDivPadding: "4.875rem 2.5rem 1.937rem" as const,
      metricsPlaceholders: "5",
      yearsOfExperience: "Off The Shelf Products",
    },
  ]);
  return (
    <section className={[styles.statsView, className].join(" ")}>
      <div className={styles.numbersWrapper}>
        <h2 className={styles.numbers}>Our Achievements</h2>
      </div>
      <div className={`grid grid-cols-3 gap-4 w-full ${styles.frameParent}`}>
        {groupComponentItems.map((item, index) => (
          <GroupComponent
            key={index}
            groupDivPadding={item.groupDivPadding}
            metricsPlaceholders={item.metricsPlaceholders}
            yearsOfExperience={item.yearsOfExperience}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsView;
