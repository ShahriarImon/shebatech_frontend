import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DevelopmentSoftwarePair.module.css";

export type DevelopmentSoftwarePairType = {
  className?: string;
  header?: string;

  /** Style props */
  developmentSoftwarePairBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
};

const DevelopmentSoftwarePair: FunctionComponent<
  DevelopmentSoftwarePairType
> = ({
  className = "",
  developmentSoftwarePairBackgroundColor,
  rectangleDivBackgroundColor,
  header,
}) => {
  const developmentSoftwarePairStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: developmentSoftwarePairBackgroundColor,
    };
  }, [developmentSoftwarePairBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  return (
    <div
      className={[styles.developmentSoftwarePair, className].join(" ")}
      style={developmentSoftwarePairStyle}
    >
      <div
        className={styles.developmentSoftwarePairChild}
        style={rectangleDivStyle}
      />
      <img
        className={styles.softwareDevelopment2Icon}
        loading="lazy"
        alt=""
        src="/software-development-1.svg"
      />
      <b className={styles.header}>{header}</b>
    </div>
  );
};

export default DevelopmentSoftwarePair;
