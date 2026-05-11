import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  header?: string;
  header1?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivWidth,
  header,
  frameDivPadding,
  header1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameGroup}>
        <div className={styles.ellipseWrapper}>
          <div className={styles.frameChild} />
        </div>
        {header1 ? (
          <h3 className={styles.header}>{header}</h3>
        ) : (
          <div className={styles.header3}>{header}</div>
        )}
      </div>
      <div className={styles.headerWrapper} style={frameDiv1Style}>
        <div className={styles.header2}>{header1}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
