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
    <footer className="py-4 bottom-0 inset-x-0 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
          {/* Left */}
          <div></div>
          {/* Right */}
          <div className="flex items-center space-x-7 text-2xl">
            <a href="#" className="p-2 transition" target="blank">
              <FontAwesomeIcon className="text-gray-500" icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="text-gray-500" icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="text-gray-500" icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon className="text-gray-500" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
