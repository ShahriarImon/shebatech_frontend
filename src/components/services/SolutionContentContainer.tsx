import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SolutionContentContainer.module.css";

export type SolutionContentContainerType = {
  className?: string;
  softwareDevelopment1?: string;
  header?: string;
  header1?: string;

  /** Style props */
  softwareDevelopment1IconHeight?: CSSProperties["height"];
  softwareDevelopment1IconMaxHeight?: CSSProperties["maxHeight"];
  headerDisplay?: CSSProperties["display"];
};

const SolutionContentContainer: FunctionComponent<
  SolutionContentContainerType
> = ({
  className = "",
  softwareDevelopment1,
  softwareDevelopment1IconHeight,
  softwareDevelopment1IconMaxHeight,
  header,
  headerDisplay,
  header1,
}) => {
  const softwareDevelopment1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: softwareDevelopment1IconHeight,
      maxHeight: softwareDevelopment1IconMaxHeight,
    };
  }, [softwareDevelopment1IconHeight, softwareDevelopment1IconMaxHeight]);

  const headerStyle: CSSProperties = useMemo(() => {
    return {
      display: headerDisplay,
    };
  }, [headerDisplay]);

  return (
    <div className={[styles.solutionContentContainer, className].join(" ")}>
      <div className={styles.solutionContentContainerChild} />
      <img
        className={styles.softwareDevelopment1Icon}
        loading="lazy"
        alt=""
        src={softwareDevelopment1}
        style={softwareDevelopment1IconStyle}
      />
      <div className={styles.headerContentContainer}>
        <h2 className={styles.header} style={headerStyle}>
          {header}
        </h2>
        <div className={styles.header2}>{header1}</div>
      </div>
    </div>
  );
};

export default SolutionContentContainer;
