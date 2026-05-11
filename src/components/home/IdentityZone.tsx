import { FunctionComponent, useState } from "react";
import styles from "./IdentityZone.module.css";
import SliderIdentity from "../common/SliderIdentity";

export type IdentityZoneType = {
  className?: string;
};

const products = [
  {
    icon: "/face-viewfinder-1@2x.png",
    title: "Face Verification",
  },
  {
    icon: "/fingerprint-2@2x.png",
    title: "Fingerprint Verification",
  },
  {
    icon: "/Mask-group@2x.png",
    title: "OCR",
  },
  {
    icon: "/recruitment-1@2x.png",
    title: "Sanction & Screening",
  },
  {
    icon: "/riskGrading.png",
    title: "Risk Grading",
  },
  {
    icon: "/Mask-group1@2x.png",
    title: "Digital Record Keeping",
  },
];

const carouselItems = [
  {
    leftImage: "/faceVerification.jpg",
    title1st: "Electronic",
    title2nd: "know your customer",
    description:
      "A comprehensive suite of products crafted to empower businesses, streamline processes, and accelerate growth with reliable, innovative solutions.",
    products: [
      {
        icon: "/face-viewfinder-1@2x.png",
        title: "Face Verification",
      },
      {
        icon: "/fingerprint-2@2x.png",
        title: "Fingerprint Verification",
      },
      {
        icon: "/Mask-group@2x.png",
        title: "OCR",
      },
      {
        icon: "/recruitment-1@2x.png",
        title: "Sanction & Screening",
      },
      {
        icon: "/riskGrading.png",
        title: "Risk Grading",
      },
      {
        icon: "/Mask-group1@2x.png",
        title: "Digital Record Keeping",
      },
    ],
  },
  {
    leftImage: "/faceVerification.jpg",
    title1st: "Electronic",
    title2nd: "know your customer",
    description:
      "A comprehensive suite of products crafted to empower businesses, streamline processes, and accelerate growth with reliable, innovative solutions.",
    products: [
      {
        icon: "/face-viewfinder-1@2x.png",
        title: "Face Verification",
      },
      {
        icon: "/fingerprint-2@2x.png",
        title: "Fingerprint Verification",
      },
      {
        icon: "/Mask-group@2x.png",
        title: "OCR",
      },
      {
        icon: "/recruitment-1@2x.png",
        title: "Sanction & Screening",
      },
      {
        icon: "/riskGrading.png",
        title: "Risk Grading",
      },
      {
        icon: "/Mask-group1@2x.png",
        title: "Digital Record Keeping",
      },
    ],
  },
];
const IdentityZone: FunctionComponent<IdentityZoneType> = ({
  className = "",
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <section className={[styles.identityZone, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.headerParent}>
          <h2 className={styles.header}>Our Products</h2>
          <div className={styles.headerWrapper}>
            <div className={styles.header2}>
              Innovative software solutions built for modern businesses, crafted
              to simplify operations, boost efficiency, and accelerate growth.
            </div>
          </div>
        </section>
        <div className={`${styles.container} identity`}>
          <SliderIdentity afterChange={(index) => setCurrentSlide(index + 1)}>
            {carouselItems?.map((item) => (
              <div>
                <div style={{ width: "100%" }}>
                  <div className={styles.functionContainer}>
                    <div className={styles.cardLayout}>
                      <img
                        className={styles.cardLayoutItem}
                        loading="lazy"
                        alt=""
                        src={item?.leftImage}
                      />
                    </div>
                    <section className={styles.titleArea}>
                      <div className={styles.firstTier}>
                        <h1 className={styles.header3}>
                          {item?.title1st}
                          <br />
                          {item?.title2nd}
                        </h1>
                        <div className={styles.secondTier}>
                          <div className={styles.header4}>
                            {item?.description}
                          </div>
                          <div className={styles.thirdTier}>
                            <div className={styles.accessZone}>
                              {item?.products.map((product, index) => (
                                <div key={index} className={styles.productItem}>
                                  <img
                                    className={styles.productIcon}
                                    loading="lazy"
                                    alt={product.title}
                                    src={product.icon}
                                  />
                                  <div className={styles.productInfo}>
                                    <div
                                      className={styles.productTitleContainer}
                                    >
                                      <div
                                        className={styles.productBackground}
                                      />
                                      <h3 className={styles.faceVerification}>
                                        {product.title}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </SliderIdentity>

          <span
            className={`absolute bottom-[43px] right-[110px] z-10 ${styles.slideCount}`}
          >
            {currentSlide}/{carouselItems?.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default IdentityZone;
