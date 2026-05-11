import { FunctionComponent } from "react";
import FrameComponent1 from "../components/products/FrameComponent1";
import FrameComponent2 from "../components/products/FrameComponent2";
import GroupComponent from "../components/products/GroupComponent";
import FrameComponent3 from "../components/products/FrameComponent3";
import FrameComponent4 from "../components/products/FrameComponent4";
import ProductCTA from "../components/products/ProductCTA";
import styles from "./Products.module.css";

const Products: FunctionComponent = () => {
  return (
    <div className={styles.products}>
      {/* <img className={styles.login1Icon} alt="" src="/Login-1@2x.png" /> */}
      <div className={styles.section1}>
        <FrameComponent1 />
      </div>
      <div className={styles.productsInner} id="products">
        <FrameComponent2 />
      </div>
      {/* <div className={styles.productsInner}></div> */}
      <div className={styles.productsInner}>
        <GroupComponent />
        <FrameComponent3 />
        <ProductCTA />
      </div>
      {/* <div className={styles.productsInner}></div> */}
      <div className={styles.footerSection}>
        <FrameComponent4 />
      </div>
    </div>
  );
};

export default Products;
