import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bottom-0 inset-x-0 bg-darkblue-900 border-t border-gray-500/20">
      <div className="container">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
          {/* Left */}
          <div></div>
          {/* Right */}
          <div className="flex items-center space-x-7 text-2xl">
            <a href="#" className="p-2 transition" target="blank">
              <FontAwesomeIcon
                className="text-gray-500 hover:text-white"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ozgenur-ozkara/"
              target="blank"
            >
              <FontAwesomeIcon
                className="text-gray-500 hover:text-white"
                icon={faLinkedin}
              />
            </a>
            <a href="https://twitter.com/ozkaraozgee" target="blank">
              <FontAwesomeIcon
                className="text-gray-500 hover:text-white"
                icon={faTwitter}
              />
            </a>
            <a href="https://github.com/ozgeozkaraa01" target="blank">
              <FontAwesomeIcon
                className="text-gray-500 hover:text-white"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
