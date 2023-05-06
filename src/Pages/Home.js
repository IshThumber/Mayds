// // import { ChevronDownIcon } from "@chakra-ui/icons";
// // import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// // // import { Dropdown } from './Dropdown';

// // function Home() {
// //   return (
// //     <Flex h="86vh">
// //       <Box flex={1} display="flex" alignItems="end" alignSelf="center" justifyContent="center" border="1px" h="50vh" bg="red">
// //         <Menu>
// //           <MenuButton as={Button} rightIcon={<ChevronDownIcon />} textAlign={"left"}>
// //             Type of Services
// //           </MenuButton>
// //           <MenuList>
// //             <MenuItem>Home</MenuItem>
// //             <MenuItem>Services</MenuItem>
// //             <MenuItem>About Us</MenuItem>
// //             <MenuItem>Contact</MenuItem>
// //           </MenuList>
// //         </Menu>
// //       </Box>
// //       <Box flex={2} position="relative">
// //         <Image src="https://via.placeholder.com/1800x1200.png" alt="Background Image" objectFit="cover" objectPosition="right" h="100%" />
// //       </Box>
// //     </Flex>
// //   );
// // }

// // export default Home;

// import React from "react";
// import { ReactComponent as Down } from "feather-icons/dist/icons/chevron-down.svg";

// const Home = (theme) => {
//   return (
//     <>
//       <div className="bg-second bg-hero bg-contain	bg-no-repeat bg-right	bg-origin-content	bg-width">
//         <div className="flex flex-col md:flex-row lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24 ">
//           <div className="lg:w-4/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
//             <div className="bg-first lg:w-full text-center mx-auto max-w-lg card shadow-xl">
//               <div className="card-body ">
//                 <div className="font-bold text-3xl md:text-xl lg:text-4xl text-second leading-tight align-top text-left pb-[14rem]">
//                   You can choose the services you want to get from us
//                 </div>
//                 {/* <div className="dropdown dropdown-end">
//                   <button tabIndex={0} className="btn border-0 bg-white capitalize w-full justify-between font-normal text-black hover:text-white">
//                     Type of Service
//                     <Down />
//                   </button>
//                   <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
//                     <li>
//                       <a>Item 1</a>
//                     </li>
//                     <li>
//                       <a href>Item 2</a>
//                     </li>
//                   </ul>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//           <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
//             <div className="flex justify-center lg:justify-end items-center">
//               {/* <img src={hero} class="min-w-0 w-full max-w-lg xl:max-w-3xl" alt="" /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import hero from "../assets/four.png";

const Header = () => {
  return (
    // <div className="relative grid-flow-row px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full bg-green-400">
    //   <div className="max-w-xl mx-auto lg:max-w-screen-xl bg-pink-800">
    //     <div className="mb-16 lg:max-w-lg lg:mb-0 bg-pink-500">
    //       <div className="max-w-xl mb-6 bg-pink-300">
    //         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
    //           You can choose the services you want to get from us
    //         </h2>
    //       </div>
    //       <div className="flex items-center mt-44 align-bottom bg-yellow-100">
    //         <a
    //           href="/"
    //           className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-tenth transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //         >
    //           Get started
    //         </a>
    //         <a
    //           href="/"
    //           aria-label=""
    //           className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    //         >
    //           Learn more
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start md:justify-start lg:bottom-0 lg:right-0 lg:items-end bg-amber-500">
    //     <img
    //       src={hero}
    //       className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
    //       alt=""
    //     />
    //   </div>
    // </div>
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row py-4">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Design Your Ideal Clean: Create Your Own Maid Service Plan Today!
              </h2>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <button class="inline-flex items-center px-4 py-2 bg-first mr-3 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                Services
              </button>
              <button class="inline-flex items-center px-4 py-2 bg-first ml-3 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                Pricing
              </button>
            </div>
          </div>
          <div className="relative lg:w-2/3">
            <img className="object-cover w-full rounded shadow-lg hsm:h-96 md:mb-8" src={hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
