import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Content */}
      <div className="flex-grow flex-1 pt-10 pb-10 bg-darkblue-900">
        <div className="my-20 relative text-center">
          <div className="max-w-screen-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-300">About Me</h2>
          </div>
          <div className="mt-10 text-center leading-6">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              rem eligendi quas aliquam corporis voluptatem. Sunt iste repellat
              neque officia, vitae similique ipsum nisi, accusantium, minus
              voluptatum in rem. Animi. Officiis fugit, repudiandae, aliquam
              aperiam, distinctio eos mollitia ducimus repellendus quis expedita
              amet! Odit, similique commodi consequatur voluptas esse mollitia
              consectetur cumque ratione perspiciatis magnam, iure eius
              voluptate veniam repudiandae.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutMe;
