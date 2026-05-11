import { FunctionComponent } from "react";
import styles from "./ProductCTA.module.css";
import { useNavigate } from "react-router-dom";

const ProductCTA: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.ctaCard}>
        <img className={styles.ctaBgIcon} alt="" src="/imageBack.png" />
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.readyToTransform}>
              Ready to Transform Your Business?
            </h2>
            <div className={styles.discoverTheRight}>
              Discover the right solution for your business and take the first
              step toward digital transformation.
            </div>
          </div>
          <div className={styles.ctaButtons}>
            <button
              className={styles.requestDemoBtn}
              onClick={() => navigate("/contactUs")}
            >
              <span>Request Demo</span>
              <img src="/blackArrow.svg" alt="" className={styles.btnArrow} />
            </button>
            <button
              className={styles.contactUsBtn}
              onClick={() => navigate("/contactUs")}
            >
              <span>Contact Us</span>
              <img src="/whiteArrow.svg" alt="" className={styles.btnArrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCTA;
