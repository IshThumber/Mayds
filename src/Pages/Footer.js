import React from "react";

const Footer = () => {
  return (
    <>
      <div className="relative bg-ninth -mb-8 px-8 text-fourth">
        <div className="max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between">
          <div className="text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              {/* <img className="w-8"></img> */}
              <h5 className="ml-2 text-xl font-black text-primary-500">Mayds</h5>
            </div>
            <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">skjd</p>
            <div className="mt-4">
              <a
                href
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              >
                4
              </a>
              <a
                href
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              >
                5
              </a>
              <a
                href
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
              >
                6
              </a>
            </div>
          </div>
          <div className="md:w-1/5">
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a href className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  1
                </a>
              </li>
              <li className="mt-3">
                <a href className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  1
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5">
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a href className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  2
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/5">
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a href className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
