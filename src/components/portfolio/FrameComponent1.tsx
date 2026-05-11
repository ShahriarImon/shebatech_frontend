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

  const onHeaderTextClick1 = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onHeaderTextClick2 = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onHeaderTextClick3 = useCallback(() => {
    // Please sync "Career" to the project
  }, []);

  return (
    <div className={[styles.portfolioInner, className].join(" ")}>
      <header className={styles.frameParent}>
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
              <div className={styles.header2} onClick={onHeaderTextClick1}>
                Services
              </div>
              <div className={styles.header3}>Portfolio</div>
              <div className={styles.header4}>Blog</div>
              <div className={styles.header5} onClick={onHeaderTextClick2}>
                About Us
              </div>
              <div className={styles.header6} onClick={onHeaderTextClick3}>
                Career
              </div>
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
    </div>
  );
};

export default FrameComponent1;
