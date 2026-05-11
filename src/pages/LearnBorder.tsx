import { FunctionComponent } from "react";
import styles from "./LearnBorder.module.css";

const LearnBorder: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CSS Rotating Border Tutorial</h1>
      <p className={styles.description}>
        Hover over the card below to see the effect. Check the CSS file to see
        how the three layers (Animation, Mask, and Content) work together.
      </p>

      <div className={styles.learningCard}>
        {/* Layer 3: CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>How it works:</h2>
          <ul className={styles.list}>
            <li>
              <strong>Layer 1 (Bottom):</strong> A giant square with a{" "}
              <code>conic-gradient</code> rotating behind the card.
            </li>
            <li>
              <strong>Layer 2 (Middle):</strong> A solid "mask" set 1px smaller
              than the card to hide the center.
            </li>
            <li>
              <strong>Layer 3 (Top):</strong> Your text, set to a high{" "}
              <code>z-index</code> so it stays visible.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.explanation}>
        <h3>Pro Tips:</h3>
        <p>
          1. <strong>Sync:</strong> Match the gradient's start position with
          your static border for a smooth "handover".
        </p>
        <p>
          2. <strong>Instant Mask:</strong> On hover, make the mask appear
          instantly (<code>transition: none</code>) so no light leaks into the
          card center.
        </p>
      </div>
    </div>
  );
};

export default LearnBorder;
