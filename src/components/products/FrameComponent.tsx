import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import styles from "./FrameComponent.module.css";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
  rectangle2855?: string;
  header?: string;
  header1?: string;

  /** Style props */
  frameDivMinWidth?: CSSProperties["minWidth"];
  headerWidth?: CSSProperties["width"];
  headerDisplay?: CSSProperties["display"];
  to?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivMinWidth,
  rectangle2855,
  header,
  header1,
  headerWidth,
  headerDisplay,
  to,
}) => {
  const navigate = useNavigate();
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const headerStyle: CSSProperties = useMemo(() => {
    return {
      width: headerWidth,
      display: headerDisplay,
    };
  }, [headerWidth, headerDisplay]);

  const onRectangleImageClick = useCallback(() => {
    // Please sync "single case study" to the project
  }, []);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
      onClick={() => to && navigate(to)}
    >
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle2855}
        onClick={onRectangleImageClick}
      />
      <div className={styles.frameItem} onClick={onRectangleImageClick} />
      <h2 className={styles.header}>{header}</h2>
      <div className={styles.header2} style={headerStyle}>
        {header1}
      </div>
    </div>
  );
};

export default FrameComponent;
