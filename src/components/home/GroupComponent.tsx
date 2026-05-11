import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  metricsPlaceholders?: string;
  yearsOfExperience?: string;

  /** Style props */
  groupDivPadding?: CSSProperties["padding"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  groupDivPadding,
  metricsPlaceholders,
  yearsOfExperience,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: groupDivPadding,
    };
  }, [groupDivPadding]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      // style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.metricsPlaceholdersWrapper}>
        <h2 className={styles.metricsPlaceholders}>{metricsPlaceholders}</h2>
      </div>
      <div className={styles.yearsOfExperience}>{yearsOfExperience}</div>
    </div>
  );
};

export default GroupComponent;
