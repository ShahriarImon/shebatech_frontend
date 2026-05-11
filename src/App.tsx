import { lazy, Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoAnalyticProductDetails from "./pages/productDetails/VideoAnalyticProductDetails";
import EasyReturnCaseStudy from "./pages/caseStudy/EasyReturnCaseStudy";

const PostalVoteCaseStudy = lazy(
  () => import("./pages/caseStudy/PostalVoteCaseStudy"),
);
const RobiCaseStudy = lazy(() => import("./pages/caseStudy/RobiCaseStudy"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const BepCaseStudy = lazy(() => import("./pages/caseStudy/BepCaseStudy"));
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const LearnBorder = lazy(() => import("./pages/LearnBorder"));
const HRMSCaseStudy = lazy(() => import("./pages/caseStudy/HRMSCaseStudy"));
const DMSCaseStudy = lazy(() => import("./pages/caseStudy/DMSCaseStudy"));
const Loader = lazy(() => import("./components/common/Loader"));
const TMSCaseStudy = lazy(() => import("./pages/caseStudy/TMSCaseStudy"));
const Products = lazy(() => import("./pages/Products"));
const JobPageDetails = lazy(() => import("./pages/Job Details/JobPageDetails"));
const FlutterJobPageDetails = lazy(
  () => import("./pages/Job Details/FlutterJobPageDetails"),
);

const BackendJobPageDetails = lazy(
  () => import("./pages/Job Details/BackendJobPageDetails"),
);
const DataAnalystJobPageDetails = lazy(
  () => import("./pages/Job Details/DataAnalystJobPageDetails"),
);
const HRMSProductDetails = lazy(
  () => import("./pages/productDetails/HRMSProductDetails"),
);
const TMSProductDetails = lazy(
  () => import("./pages/productDetails/TMSProductDetails"),
);
const DMSProductDetails = lazy(
  () => import("./pages/productDetails/DMSProductDetails"),
);
const EKYCProductDetails = lazy(
  () => import("./pages/productDetails/EKYCProductDetails"),
);
const LMSProductDetails = lazy(
  () => import("./pages/productDetails/LMSProductDetails"),
);
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Career = lazy(() => import("./pages/Career"));

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="/products/ekyc"
          element={
            <Suspense fallback={<Loader />}>
              <EKYCProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/products/hrms"
          element={
            <Suspense fallback={<Loader />}>
              <HRMSProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/products/lms"
          element={
            <Suspense fallback={<Loader />}>
              <LMSProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/products/videoAnalytics"
          element={
            <Suspense fallback={<Loader />}>
              <VideoAnalyticProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/products/tms"
          element={
            <Suspense fallback={<Loader />}>
              <TMSProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/products/dms"
          element={
            <Suspense fallback={<Loader />}>
              <DMSProductDetails />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={<Loader />}>
              <Portfolio />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/bep"
          element={
            <Suspense fallback={<Loader />}>
              <BepCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/robi"
          element={
            <Suspense fallback={<Loader />}>
              <RobiCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/postalVote"
          element={
            <Suspense fallback={<Loader />}>
              <PostalVoteCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/portfolio/eazyReturn"
          element={
            <Suspense fallback={<Loader />}>
              <EasyReturnCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/career"
          element={
            <Suspense fallback={<Loader />}>
              <Career />
            </Suspense>
          }
        />
        <Route
          path="/career/full-stack-dev"
          element={
            <Suspense fallback={<Loader />}>
              <JobPageDetails />
            </Suspense>
          }
        />
        <Route
          path="/career/flutter-dev"
          element={
            <Suspense fallback={<Loader />}>
              <FlutterJobPageDetails />
            </Suspense>
          }
        />
        <Route
          path="/career/backend-dev"
          element={
            <Suspense fallback={<Loader />}>
              <BackendJobPageDetails />
            </Suspense>
          }
        />
        <Route
          path="/career/data-analyst"
          element={
            <Suspense fallback={<Loader />}>
              <DataAnalystJobPageDetails />
            </Suspense>
          }
        />
        <Route
          path="/aboutUs"
          element={
            <Suspense fallback={<Loader />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/contactUs"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/hrms-case-study"
          element={
            <Suspense fallback={<Loader />}>
              <HRMSCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/tms-case-study"
          element={
            <Suspense fallback={<Loader />}>
              <TMSCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/dms-case-study"
          element={
            <Suspense fallback={<Loader />}>
              <DMSCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/learn-border"
          element={
            <Suspense fallback={<Loader />}>
              <LearnBorder />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
export default App;
