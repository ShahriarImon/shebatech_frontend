import { FunctionComponent, useCallback } from "react";
import ButtonGlass from "./ButtonGlass";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
import { scrollToSection } from "../../utils/scrollNavigation";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHeaderTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onHeaderTextClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderTextClick2 = useCallback(() => {
    // Please sync "Portfolio" to the project
  }, []);

  const onHeaderTextClick3 = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/productBannerHigh.jpg" />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.rectangleGroup}>
        <h2 className={styles.header}>Our Product Suite</h2>
        <div className={styles.header2}>
          A comprehensive set of enterprise solutions designed to automate
          workflows, improve efficiency, and drive smarter decision-making.
        </div>
        <ButtonGlass
          property1="Default"
          onClick={() => {
            scrollToSection("products");
          }}
        />
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default FrameComponent1;
