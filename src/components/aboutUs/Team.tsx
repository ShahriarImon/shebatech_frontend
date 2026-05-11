import { FunctionComponent, type CSSProperties } from "react";
import styles from "./Team.module.css";

export type TeamType = {
  className?: string;
  rectangle295?: string;
  patrikFilder?: string;
  chiefOperationsOfficer?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivWidth1?: CSSProperties["width"];
  chiefOperationsOfficerWidth?: CSSProperties["width"];
};

const Team: FunctionComponent<TeamType> = ({
  className = "",
  property1 = "Default",
  rectangle295,
  frameDivWidth,
  frameDivWidth1,
  patrikFilder,
  chiefOperationsOfficer,
  chiefOperationsOfficerWidth,
}) => {
  // const frameDiv1Style: CSSProperties = useMemo(() => {
  //   return {
  //     width: frameDivWidth,
  //   };
  // }, [frameDivWidth]);

  // const frameDiv2Style: CSSProperties = useMemo(() => {
  //   return {
  //     width: frameDivWidth1,
  //   };
  // }, [frameDivWidth1]);

  // const patrikFilderStyle: CSSProperties = useMemo(() => {
  //   return {
  //     width: patrikFilderWidth,
  //   };
  // }, [patrikFilderWidth]);

  // const chiefOperationsOfficerStyle: CSSProperties = useMemo(() => {
  //   return {
  //     width: chiefOperationsOfficerWidth,
  //   };
  // }, [chiefOperationsOfficerWidth]);

  return (
    <section
      className={[styles.team, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.teamChild} />
      <img
        className={styles.teamItem}
        loading="lazy"
        alt=""
        src={rectangle295}
      />
      <div className={styles.teamInner}>
        <div className={styles.patrikFilderParent}>
          <h3 className={styles.patrikFilder}>{patrikFilder}</h3>
          <div className={styles.chiefOperationsOfficer}>
            {chiefOperationsOfficer}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
