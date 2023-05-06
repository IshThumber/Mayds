// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// const FAQs = () => {
//   const faqs = [
//     {
//       question: "Is lunch provided free of cost ?",
//       answer:
//         "Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system."
//     },
//     {
//       question: "Do you have 2 Bedroom suites ?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       question: "Are Wi-Fi costs included in the price ?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       question: "Where can I reach you for support ?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     }
//   ];

//   const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

//   const toggleQuestion = (questionIndex) => {
//     if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
//     else setActiveQuestionIndex(questionIndex);
//   };

//   return (
//     <>
//       <div className="relative">
//         <div className="max-w-screen-xl mx-auto py-20 lg:py-24">
//           <div className="flex flex-col items-center">
//             <h2 className="w-full text-center font-bold text-5xl">FAQs</h2>

//             <dl className="mt-12 max-w-4xl relative">
//               {faqs.map((faq, index) => (
//                 <div
//                   className="group cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300"
//                   key={index}
//                   onClick={() => {
//                     toggleQuestion(index);
//                   }}
//                 >
//                   <dl className="flex justify-between items-center">
//                     <span className="text-lg lg:text-xl font-semibold">{faq.question}</span>
//                     <motion.span
//                       className="ml-2 transition duration-300"
//                       variants={{
//                         collapsed: { rotate: 0 },
//                         open: { rotate: -180 }
//                       }}
//                       initial="collapsed"
//                       animate={activeQuestionIndex === index ? "open" : "collapsed"}
//                       transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
//                     >
//                       <FaAngleDown />
//                     </motion.span>
//                   </dl>
//                   <motion.dd
//                     className="pointer-events-none text-sm sm:text-base leading-relaxed"
//                     variants={{
//                       open: { opacity: 1, height: "auto", marginTop: "16px" },
//                       collapsed: { opacity: 0, height: 0, marginTop: "0px" }
//                     }}
//                     initial="collapsed"
//                     animate={activeQuestionIndex === index ? "open" : "collapsed"}
//                     transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
//                   >
//                     {faq.answer}
//                   </motion.dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FAQs;

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <span viewBox="0 0 24 24" className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <FaAngleDown />
        </span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "What kind of services do you offer?",
      answer:
        "We offer a range of cleaning and household services including general cleaning, deep cleaning, move-in/out cleaning, post-construction cleaning, organizing, laundry, ironing, pet care, and babysitting services."
    },
    {
      question: "How do I book a cleaning appointment?",
      answer:
        "You can book a cleaning appointment on our website by filling out our online booking form, or by calling our customer service number to speak with one of our representatives."
    },
    {
      question: "Are your maids insured and bonded?",
      answer: "Yes, all of our maids are insured and bonded for your protection and peace of mind."
    },
    {
      question: "How much does your service cost?",
      answer:
        "The cost of our services depends on the type of service, the size of your home, and any specific requirements you may have. We offer competitive pricing and can provide you with a free quote based on your needs."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept a variety of payment options including credit cards, PayPal, and bank transfers."
    }
  ];
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">FAQs</h2>
        </div>
        <div class="space-y-4">
          {faqs.map((item) => (
            <Item title={item.question}>{item.answer}</Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
