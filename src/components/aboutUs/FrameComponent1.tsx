import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  header?: string;
  title?: string;
  year?: number;

  /** Style props */
  frameDivMinWidth?: CSSProperties["minWidth"];
  frameDivPadding?: CSSProperties["padding"];
  rectangleDivWidth?: CSSProperties["width"];
  serviceNamePadding?: CSSProperties["padding"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  frameDivMinWidth,
  frameDivPadding,
  rectangleDivWidth,
  serviceNamePadding,
  header,
  title,
  year,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
      // padding: frameDivPadding,
    };
  }, [frameDivMinWidth, frameDivPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  const serviceNameStyle: CSSProperties = useMemo(() => {
    return {
      padding: serviceNamePadding,
    };
  }, [serviceNamePadding]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDiv3Style}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.serviceName}>
        <b className={styles.header}>
          <span style={{ fontWeight: 600 }}>
            {year}
            <br />
          </span>
          <span className={styles.theBeginning}>{title}</span>
        </b>
      </div>
      <div className={styles.header2}>{header}</div>
    </div>
  );
};

export default FrameComponent1;
