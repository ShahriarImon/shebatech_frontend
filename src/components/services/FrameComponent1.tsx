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
    // Please sync "Portfolio" to the project
  }, []);

  const onHeaderTextClick2 = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onLineClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='buttonGlassContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
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
        <div
          className={styles.buttonGlass}
          data-scroll-to="buttonGlassContainer"
        >
          <div className={styles.buttonGlassChild} />
          <nav className={styles.headerParent}>
            <div className={styles.header} onClick={onHeaderTextClick}>
              Home
            </div>
            <div className={styles.header2}>Services</div>
            <div className={styles.header3} onClick={onHeaderTextClick1}>
              Portfolio
            </div>
            <div className={styles.header4}>Blog</div>
            <div className={styles.header5} onClick={onHeaderTextClick2}>
              About Us
            </div>
            <div className={styles.header6}>Career</div>
          </nav>
          <div className={styles.buttonGlassItem} onClick={onLineClick} />
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
