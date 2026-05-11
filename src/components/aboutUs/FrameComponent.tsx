import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  rectangle288?: string;
  header?: string;
  header1?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  headerWidth?: CSSProperties["width"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  rectangle288,
  frameDivWidth,
  header,
  header1,
  headerWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const headerStyle: CSSProperties = useMemo(() => {
    return {
      width: headerWidth,
    };
  }, [headerWidth]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.overlay} />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src={rectangle288}
      />
      <div className={styles.headerWrapper} style={frameDivStyle}>
        <h2 className={styles.header}>{header}</h2>
      </div>
      <div className={styles.header2} style={headerStyle}>
        {header1}
      </div>
    </div>
  );
};

export default FrameComponent;
