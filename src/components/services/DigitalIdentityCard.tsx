import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DigitalIdentityCard.module.css";
import { GoDotFill } from "react-icons/go";

export type DevelopmentSoftwarePairType = {
  className?: string;
  header?: string;
  features: string[];
  icon?: string;
  /** Style props */
  developmentSoftwarePairBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
};

const DigitalIdentityCard: FunctionComponent<DevelopmentSoftwarePairType> = ({
  className = "",
  developmentSoftwarePairBackgroundColor,
  rectangleDivBackgroundColor,
  header,
  features,
  icon,
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
        src={icon}
      />
      <b className={styles.header}>{header}</b>
      <div className={`${styles.listCon}`}>
        {features.map((resp, index) => (
          <div key={index} className={`${styles.list}`}>
            <GoDotFill style={{ width: "5px" }} />
            <p className={`${styles.subTitle}`}>{resp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalIdentityCard;
