import { FunctionComponent } from "react";
import Component1 from "./Component1";
import styles from "./CallToAction.module.css";
import { useNavigate } from "react-router-dom";

export type CallToActionType = {
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <div className={styles.letsStartSomethingGreatToParent}>
        <h1 className={styles.letsStartSomethingContainer}>
          <span>
            {`LET’S START `}
            <br />
            {`SOMETHING `}
          </span>
          <span className={styles.great}>
            GREAT
            <br />
          </span>
          <span> TOGETHER</span>
        </h1>
        <div className={styles.callToActionLink}>
          <Component1
            property1="Frame 4161"
            onClick={() => navigate("/contactUs")}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
