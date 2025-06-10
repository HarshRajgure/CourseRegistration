import React from "react";
import HomeSection from "../components/HomeSection";
import CoursesSection from "../components/CoursesSection";
import WhyChooseSection from "../components/WhyChooseSection";
import WelcomeSection from "../components/WelcomeSection"; // 👈 import added

const HomePage = () => {
  return (
    <>
      <WelcomeSection /> {/* 👈 added at top */}
      <HomeSection />
      <CoursesSection />
      <WhyChooseSection />
    </>
  );
};

export default HomePage;
