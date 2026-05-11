import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onHeaderTextClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.stlLogoHighResolution021Wrapper}>
        <img
          className={styles.stlLogoHighResolution021}
          loading="lazy"
          alt=""
          src="/STL-Logo-high-resolution-02-1@2x.png"
        />
      </div>
      <div className={styles.buttonGlassWrapper}>
        <div className={styles.buttonGlass}>
          <div className={styles.buttonGlassChild} />
          <nav className={styles.headerParent}>
            <div className={styles.header} onClick={onHeaderTextClick}>
              Home
            </div>
            <div className={styles.header2}>Services</div>
            <div className={styles.header3}>Portfolio</div>
            <div className={styles.header4}>Blog</div>
            <div className={styles.header5}>About Us</div>
            <div className={styles.header6}>Career</div>
          </nav>
          <div className={styles.buttonGlassItem} />
          <div className={styles.buttonGlassInner} />
        </div>
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.header7}>eKYC</div>
      </button>
    </header>
  );
};

export default FrameComponent1;
