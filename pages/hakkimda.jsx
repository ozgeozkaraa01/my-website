import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Content */}
      <div className="flex-grow"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutMe;
