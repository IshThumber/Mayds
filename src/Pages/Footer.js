import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <>
//       <div className="relative bg-ninth -mb-8 px-8 text-fourth">
//         <div className="max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between">
//           <div className="text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0">
//             <div className="flex items-center justify-center md:justify-start">
//               <h5 className="text-2xl font-medium text-primary-500">Mayds</h5>
//             </div>
//             <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">Maids At Your Door Step.</p>
//             <div className="mt-4">
//               <a
//                 href
//                 className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href
//                 className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href
//                 className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4"
//               >
//                 <FaTwitter />
//               </a>
//             </div>
//           </div>
//           <div className="md:w-1/5">
//             <ul className="mt-4 text-sm font-medium">
//               <li className="mt-3">
//                 <h5 className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 ">
//                   Services
//                 </h5>
//               </li>
//               <li className="mt-3">
//                 <p>House Cleaning</p>
//               </li>
//               <li className="mt-3">
//                 <p>Office Cleaning</p>
//               </li>
//               <li className="mt-3">
//                 <p>Carpet Cleaning</p>
//               </li>
//               <li className="mt-3">
//                 <p>Window Cleaning</p>
//               </li>
//             </ul>
//           </div>
//           <div className="md:w-1/5">
//             <ul className="mt-4 text-sm font-medium">
//               <li className="mt-3">
//                 <h5 className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
//                   Locations
//                 </h5>
//               </li>
//               <li className="mt-3">
//                 <p>London</p>
//               </li>
//               <li className="mt-3">
//                 <p>Manchester</p>
//               </li>
//               <li className="mt-3">
//                 <p>Birmingham</p>
//               </li>
//               <li className="mt-3">
//                 <p>Liverpool</p>
//               </li>
//             </ul>
//           </div>
//           <div className="md:w-1/5">
//             <ul className="mt-4 text-sm font-medium">
//               <li className="mt-3">
//                 <h5 className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
//                   Contact Information
//                 </h5>
//               </li>
//               <li className="mt-3">
//                 <p>Phone: +1 234 567 890</p>
//               </li>
//               <li className="mt-3">
//                 <p>
//                   Email:
//                   <a href="mailto:abc@example.com" className="text-primary-500 hover:text-primary-600 transition duration-300">
//                     abc@example.com
//                   </a>
//                 </p>
//               </li>
//               <li className="mt-3">
//                 <p>Address: 123 Street Name, City, England</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="relative mt-16 bg-ninth">
      <svg className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-ninth" preserveAspectRatio="none" viewBox="0 0 1440 54">
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a href="/" aria-label="Go home" title="Mayds" className="inline-flex items-center">
              <span className="ml-2 text-2xl font-bold tracking-wide text-fourth uppercase">Mayds</span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-fourth text-opacity-60">Maids At Your Door Step.</p>
              <p className="mt-4 text-sm text-fourth text-opacity-60">
                Mayds provide services for your home and office. We provide the best cleaning services in the Delhi.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 row-gap-8 lg:col-span-4 md:grid-cols-3 text-fourth text-opacity-60">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400 text-fourth text-opacity-90">Services</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    House Cleaning
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Office Cleaning
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Cooking
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Baby Sitting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400 text-fourth text-opacity-90">Locations</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    New Delhi
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Noida
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Gurgaon
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Ghaziabad
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Faridabad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400 text-fourth text-opacity-90">Contact us</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    About us
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-fourth text-opacity-60">© Copyright 2020 Lorem Inc. All rights reserved.</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">
              <div className="relative p-2 bg-fourth rounded-full h-fit w-fit">
                <FaInstagram color="#142850" />
              </div>
            </a>
            <a href="/" className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">
              <div className="relative p-2 bg-fourth rounded-full h-fit w-fit">
                <FaLinkedin color="#142850" />
              </div>
            </a>
            <a href="/" className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400">
              <div className="relative p-2 bg-fourth rounded-full h-fit w-fit">
                <FaTwitter color="#142850" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
