import { FunctionComponent } from "react";
import ButtonGlass from "./ButtonGlass";
import styles from "./FrameComponent2.module.css";
import { scrollToSection } from "../../utils/scrollNavigation";
import { Navigate, useNavigate } from "react-router-dom";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <section className={[styles.portfolioInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
          <h2 className={styles.header}>Our Work Speaks for Itself</h2>
          <div className={styles.headerWrapper}>
            <h2 className={styles.header2}>
              Innovative, scalable, and user-centric digital solutions built for
              global clients.
            </h2>
          </div>
        </div>
        <div className={styles.buttonGlassWrapper}>
          <ButtonGlass
            property1="Default"
            // onClick={() => {
            //   scrollToSection("projects");
            // }}
            onClick={() => navigate("/contactUs")}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
