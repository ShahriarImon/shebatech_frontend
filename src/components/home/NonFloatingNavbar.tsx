import React, { useCallback, useState } from "react";

import styles from "./Navigation1.module.css";
import { useNavigate } from "react-router-dom";

const NonFloatingNavbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onHeaderTextClick = useCallback(() => {
    // Please sync "Services" to the project
    navigate("/services");
    setMobileMenuOpen(false);
  }, []);

  const onHeaderTextClick1 = useCallback(() => {
    // Please sync "Portfolio" to the project
    navigate("/portfolio");
    setMobileMenuOpen(false);
  }, []);

  const onHeaderTextClick2 = useCallback(() => {
    // Please sync "About Us" to the project
    navigate("/aboutUs");
    setMobileMenuOpen(false);
  }, []);

  const onHeaderTextClick3 = useCallback(() => {
    // Please sync "Career" to the project
    navigate("/career");
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.nonFloatingStlLogoHighResolution021Parent} ${styles.topper}`}
    >
      <img
        className={styles.stlLogoHighResolution021}
        loading="lazy"
        alt=""
        src="/STL-Logo-high-resolution-02-1@2x.png"
      />

      {/* Desktop Navigation */}
      <div className={styles.buttonGlass}>
        <div className={styles.buttonGlassChild} />
        <div className={styles.headerGroup}>
          <div className={styles.header3} onClick={() => navigate("/")}>
            Home
          </div>
          <div className={styles.header4} onClick={onHeaderTextClick}>
            Services
          </div>
          <div className={styles.header5} onClick={onHeaderTextClick1}>
            Portfolio
          </div>
          <div className={styles.header6}>Blog</div>
          <div className={styles.header7} onClick={onHeaderTextClick2}>
            About Us
          </div>
          <div className={styles.header8} onClick={onHeaderTextClick3}>
            Career
          </div>
        </div>
      </div>

      <button className={styles.rectangleGroup}>
        <div className={styles.rectangleDiv} />
        <div className={styles.header9}>eKYC</div>
      </button>

      {/* Hamburger Button (mobile only) */}
      <button
        className={styles.hamburgerBtn}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen1 : ""}`}
        />
        <span
          className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen2 : ""}`}
        />
        <span
          className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen3 : ""}`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <nav className={styles.mobileMenuNav}>
            <div
              className={styles.mobileMenuItem}
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </div>
            <div className={styles.mobileMenuItem} onClick={onHeaderTextClick}>
              Services
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={onHeaderTextClick1}
            >
              Portfolio
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={onHeaderTextClick2}
            >
              About Us
            </div>
            <div
              className={styles.mobileMenuItem}
              onClick={onHeaderTextClick3}
            >
              Career
            </div>
            <button
              className={styles.mobileEkycBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              eKYC
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NonFloatingNavbar;
