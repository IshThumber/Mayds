import React from "react";
import Slider from "react-slick";

import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <div className="absolute top-0 h-full flex items-end md:items-center z-20 right-0">
    <button {...props}>
      <BsCaretRightFill />
    </button>
  </div>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <div className="absolute top-0 h-full flex items-end md:items-center z-20 left-0">
    <button {...props}>
      <BsCaretLeftFill />
    </button>
  </div>
);

const Stories = () => {
  const testimonials = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Charlotte Hale",
      customerTitle: "CEO, Delos Inc."
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Adam Cuppy",
      customerTitle: "Founder, EventsNYC"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Steven Marcetti",
      customerTitle: "Event Manager, Brite"
    }
  ];
  return (
    <>
      <div className="relative">
        {/* container */}
        <div className="max-w-screen-xl mx-auto py-20 lg:py-24 bg-green -400">
          {/* content */}
          <div className="flex flex-col items-center">
            {/* headinginfo */}
            <h2 className="w-full text-center font-bold text-5xl bg-slate-50">Stories of our Heros</h2> {/* headingheading*/}
          </div>
          <div className="mt-24">
            {/* testi slider */}
            {/* <Slider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}> */}
              {testimonials.map((testimonial, index) => (
                <div
                  // className="flex flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none justify-stretch align-middle h-full"
                  className="flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none"
                  key={index}
                >
                  {/* testimonial */}
                  <div className="md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center justify-end pr-10 max-w-xs md:max-w-none">
                    {/* img */}
                    <img className="rounded-full h-[200px] " src={testimonial.imageSrc} alt="" /> {/* img */}
                  </div>
                  <div className="md:mx-3 grow lg:mx-6 md:w-6/12 py-4 flex flex-col h-full">
                    {/* text */}
                    <div className="relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0">
                      {/* quote con */}
                      <p className="text-center md:text-left font-medium text-xl lg:text-xl">{testimonial.quote}</p>
                    </div>
                    <div className="px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0">
                      <h5 className="font-bold text-lg lg:text-xl xl:text-2xl text-primary-500">{testimonial.customerName}</h5>
                      <p className="font-medium text-sm">{testimonial.customerTitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
