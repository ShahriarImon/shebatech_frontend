import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ApplyButton from "./ApplyButton";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  flutterDeveloper?: string;
  yearsExperience?: string;
  dec2025?: string;
  property1?: string;

  /** Style props */
  frameDivGap?: CSSProperties["gap"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivAlignSelf1?: CSSProperties["alignSelf"];
  handleApplyClick: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivGap,
  frameDivMinWidth,
  frameDivAlignSelf,
  frameDivPadding,
  flutterDeveloper,
  frameDivAlignSelf1,
  yearsExperience,
  dec2025,
  property1,
  handleApplyClick,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      padding: frameDivPadding,
    };
  }, [frameDivAlignSelf, frameDivPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivAlignSelf1]);

  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.frameGroup} style={frameDiv1Style}>
          <div
            className={styles.flutterDeveloperWrapper}
            style={frameDiv2Style}
          >
            <h3 className={styles.flutterDeveloper}>{flutterDeveloper}</h3>
          </div>
          <div className={styles.frameContainer} style={frameDiv3Style}>
            <div className={styles.bolt2Wrapper}>
              <img className={styles.bolt2Icon} alt="" src="/bolt-1.svg" />
            </div>
            <div className={styles.yearsExperience}>{yearsExperience}</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.calendarDay2Wrapper}>
            <img
              className={styles.calendarDay2Icon}
              loading="lazy"
              alt=""
              src="/calendar-day-1.svg"
            />
          </div>
          <div className={styles.yearsExperience}>{dec2025}</div>
        </div>
      </div>
      <div className={styles.applyButtonWrapper}>
        <ApplyButton
          property1={property1}
          handleApplyClick={handleApplyClick}
        />
      </div>
    </section>
  );
};

export default FrameComponent;
