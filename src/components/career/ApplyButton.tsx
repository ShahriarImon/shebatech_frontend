import { FunctionComponent, type CSSProperties } from "react";
import styles from "./ApplyButton.module.css";

export type ApplyButtonType = {
  className?: string;

  /** Variant props */
  property1?: string;
  handleApplyClick: () => void;
};

const ApplyButton: FunctionComponent<ApplyButtonType> = ({
  className = "",
  property1 = "Default",
  handleApplyClick,
}) => {
  return (
    <button
      className={[styles.applyBtn, className].join(" ")}
      data-property1={property1}
      onClick={() => {
        handleApplyClick();
      }}
    >
      <div className={styles.applyNow}>Apply Now</div>
      <img
        className={styles.arrowSmallRight1Icon}
        alt=""
        src="/arrow-small-right-1@2x.png"
      />
    </button>
  );
};

export default ApplyButton;
