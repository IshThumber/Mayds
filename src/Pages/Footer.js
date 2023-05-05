import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="relative bg-ninth -mb-8 px-8 text-fourth">
        <div className="max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between">
          <div className="text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <h5 className="text-2xl font-medium text-primary-500">Mayds</h5>
            </div>
            <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">Maids At Your Door Step.</p>
            <div className="mt-4">
              <a
                href
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              >
                <FaInstagram />
              </a>
              <a
                href
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              >
                <FaLinkedin />
              </a>
              <a
                href
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="md:w-1/5">
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <h5 className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 ">
                  Services
                </h5>
              </li>
              <li className="mt-3">
                <p>House Cleaning</p>
              </li>
              <li className="mt-3">
                <p>Office Cleaning</p>
              </li>
              <li className="mt-3">
                <p>Carpet Cleaning</p>
              </li>
              <li className="mt-3">
                <p>Window Cleaning</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5">
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <h5 className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Locations
                </h5>
              </li>
              <li className="mt-3">
                <p>London</p>
              </li>
              <li className="mt-3">
                <p>Manchester</p>
              </li>
              <li className="mt-3">
                <p>Birmingham</p>
              </li>
              <li className="mt-3">
                <p>Liverpool</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5">
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <h5 className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Contact Information
                </h5>
              </li>
              <li className="mt-3">
                <p>Phone: +1 234 567 890</p>
              </li>
              <li className="mt-3">
                <p>
                  Email:
                  <a href="mailto:abc@example.com" className="text-primary-500 hover:text-primary-600 transition duration-300">
                    abc@example.com
                  </a>
                </p>
              </li>
              <li className="mt-3">
                <p>Address: 123 Street Name, City, England</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
