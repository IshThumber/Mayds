import React from "react";
import cleaning from "../icons/cleaning.png";
import babyStroller from "../icons/baby-stroller.png";
import vet from "../icons/vet.png";
import bake from "../icons/bake.png";
import elderly from "../icons/elderly.png";
import washingMachine from "../icons/washing-machine.png";
import mother from "../icons/mother.png";

const Services = () => {
  const defaultCards = [
    {
      imageSrc: cleaning,
      title: "Spotless Solutions",
      desc: "From cleaning to childcare, our maids provide top-notch services to keep your home and life running smoothly."
    },
    {
      imageSrc: babyStroller,
      title: "Cooks & Cleaners",
      desc: "Our maids offer a range of services, including cooking, cleaning, and laundry, to make your life easier and more enjoyable."
    },
    {
      imageSrc: vet,
      title: "Elderly & Pet Care Pros",
      desc: "Let our skilled and compassionate maids take care of your elderly loved ones and furry friends with personalized care and attention."
    },
    {
      imageSrc: elderly,
      title: "The elderly Home",
      desc: "Our maids are experts at organizing and decluttering your home, so you can enjoy a stress-free and tidy living space."
    },
    {
      imageSrc: cleaning,
      title: "Clean Sweep",
      desc: "Our maids provide thorough cleaning services that will leave your home spotless and shining from top to bottom."
    },
    {
      imageSrc: mother,
      title: "Kids & Chores",
      desc: "With our maid service, you can take a break from the daily grind of childcare and household chores and enjoy more quality time with your family."
    },
    {
      imageSrc: bake,
      title: "Fur-Free Home",
      desc: "Our maids are dedicated to keeping your home clean and free of pet hair and dander, so you can breathe easy and enjoy a healthy living environment."
    }
  ];

  // if (!cards) cards = defaultCards;

  return (
    <>
      <div className="relative ">
        <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24 ">
          <h2 className="w-full text-center font-bold text-5xl">Services</h2>
          <div className="mt-10 w-full" />
          {defaultCards.map((card, i) => (
            <div className="md:w-1/2 lg:w-1/3 max-w-sm ">
              <div className="flex flex-col items-center text-center h-full mx-4 px-4 py-8 " key={i}>
                <div className="text-center rounded-full p-4 bg-gray-100">
                  <img src={card.imageSrc} className="w-6 h-6" alt="piko" />
                </div>
                <h3 className="mt-4 font-bold text-xl leading-none">{card.title}</h3>
                <p className="mt-4 text-sm font-medium text-secondary-300">{card.desc}</p>

                {/* <span className="border text-center rounded-full p-5 flex-shrink-0 bg-green-400">
                  <img className="w-6 h-6" src={card.imageSrc} alt="" />
                </span>
                <span className="sm:ml-4 mt-4 sm:mt-2 bg-amber-300">
                  <span className="mt-4 tracking-wide font-bold text-2xl leading-none">{card.title}</span>
                </span>
                <span>
                  <p className="mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose">
                    {card.desc || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                  </p>
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
