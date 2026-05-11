import React, { useCallback, useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedBar, setSelectedBar] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const windowScroll = window.scrollY;
      let internalScroll = 0;

      const path = location.pathname;
      let selector = "";

      if (path === "/" || path === "/home") {
        selector = '[class*="home"]';
      } else if (path.startsWith("/services")) {
        selector = '[class*="services"]';
      } else if (path === "/portfolio/bep") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/portfolio/postalVote") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/portfolio/robi") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/portfolio/insteward") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/portfolio/easyReturn") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path.startsWith("/portfolio")) {
        selector = '[class*="portfolio"]';
      } else if (path === "/products/hrms") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/products/tms") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/products/dms") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/products/ekyc") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/products/lms") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path.startsWith("/products")) {
        selector = '[class*="products"]';
      } else if (path.startsWith("/aboutUs")) {
        selector = '[class*="aboutUs"]';
      } else if (path.startsWith("/career/")) {
        selector = "#job-page-details-container";
      } else if (path === "/career") {
        selector = '[class*="career"]';
      } else if (path === "/hrms-case-study") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/dms-case-study") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/tms-case-study") {
        selector = '[class*="hrmsCaseStudy"]';
      } else if (path === "/contactUs") {
        selector = '[class*="contactUsPage"]';
      }

      if (selector) {
        // Find the element that is likely the page root
        const root = document.querySelector(selector) as HTMLElement;
        if (root) {
          internalScroll = root.scrollTop;
        }
      }

      if (windowScroll > 50 || internalScroll > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Use capture phase (true) to catch scroll events from any element
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [location.pathname]);

  console.log("location:", location);
  const onHeaderTextClick = useCallback(() => {
    // Please sync "Services" to the project
    setSelectedBar("services");
    navigate("/services");
    setMobileMenuOpen(false);
  }, []);
  const onProductClick = useCallback(() => {
    // Please sync "Services" to the project
    setSelectedBar("products");
    navigate("/products");
    setMobileMenuOpen(false);
  }, []);

  const onHeaderTextClick1 = useCallback(() => {
    // Please sync "Portfolio" to the project
    setSelectedBar("portfolio");
    navigate("/portfolio");
    setMobileMenuOpen(false);
  }, []);

  const onHeaderTextClick2 = useCallback(() => {
    // Please sync "About Us" to the project
    setSelectedBar("aboutUs");
    navigate("/aboutUs");
    setMobileMenuOpen(false);
  }, []);

  const onHeaderTextClick3 = useCallback(() => {
    // Please sync "Career" to the project
    setSelectedBar("career");
    navigate("/career");
    setMobileMenuOpen(false);
  }, []);
  const onHeaderTextClick4 = useCallback(() => {
    // Please sync "Career" to the project
    setSelectedBar("blog");
    navigate("/blog");
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <Outlet />
      <div
        className={`${styles.stlLogoHighResolution021Parent} ${styles.topper} ${isScrolled ? styles.scrolled : ""}`}
      >
        <img
          className={styles.stlLogoHighResolution021}
          loading="lazy"
          alt=""
          src="/STL-Logo-high-resolution-02-1@2x.png"
          onClick={() => navigate("/")}
        />

        {/* Desktop Navigation */}
        <div className={styles.buttonGlass}>
          <div className={styles.buttonGlassChild} />
          <div className={styles.headerGroup}>
            <div
              className={`${styles.navItem} ${location?.pathname === "/" ? styles.isActive : ""}`}
              onClick={() => {
                setSelectedBar("home");
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              className={`${styles.navItem} ${location?.pathname === "/services" ? styles.isActive : ""}`}
              onClick={onHeaderTextClick}
            >
              Services
            </div>
            <div
              className={`${styles.navItem} ${location?.pathname === "/products" ? styles.isActive : ""}`}
              onClick={onProductClick}
            >
              Products
            </div>
            <div
              className={`${styles.navItem} ${location?.pathname === "/portfolio" ? styles.isActive : ""}`}
              onClick={onHeaderTextClick1}
            >
              Portfolio
            </div>
            <div
              className={`${styles.navItem} ${location?.pathname === "/aboutUs" ? styles.isActive : ""}`}
              onClick={onHeaderTextClick2}
            >
              About Us
            </div>{" "}
            <div
              className={`${styles.navItem} ${location?.pathname === "/career" ? styles.isActive : ""}`}
              onClick={onHeaderTextClick3}
            >
              Career
            </div>
            {/* <div
              className={`${styles.navItem} ${location?.pathname === "/blog" ? styles.isActive : ""}`}
              // onClick={onHeaderTextClick4}
              style={{ color: "gray" }}
            >
              <abbr
                title="Upcomming..."
                style={{
                  textDecoration: "none",
                  borderBottom: "none",
                }}
              >
                Blog
              </abbr>
            </div> */}
          </div>
        </div>
        <div className={`${styles.btnCon}`}>
          <button
            className={styles.rectangleGroup}
            onClick={() => navigate("/products/ekyc")}
          >
            <div className={styles.rectangleDiv} />
            <div className={styles.header9}>eKYC</div>
          </button>
        </div>
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
      </div>

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
            <div className={styles.mobileMenuItem} onClick={onHeaderTextClick1}>
              Portfolio
            </div>
            <div className={styles.mobileMenuItem} onClick={onHeaderTextClick2}>
              About Us
            </div>
            <div className={styles.mobileMenuItem} onClick={onHeaderTextClick3}>
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

export default Navbar;
