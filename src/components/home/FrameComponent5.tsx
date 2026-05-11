import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.instanceParent}>
          <div className="w-[40%] flex flex-col justify-start item-start text-[#ffffff] h-[100%] ">
            <p className={styles.heading}>A Modern, </p>
            <p className={styles.heading}>Multi-Stack </p>
            <p className={styles.heading}>Toolbox</p>
            <p className={`mt-3 font-[18px] ${styles.subheading}`}>
              We pick the right tool for the job — not the
            </p>
            <p className={`font-[18px] ${styles.subheading}`}>trendy one.</p>
          </div>
          <div className="w-[60%]">
            <GroupComponent1 property1="Default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
