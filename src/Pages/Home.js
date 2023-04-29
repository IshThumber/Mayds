// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// // import { Dropdown } from './Dropdown';

// function Home() {
//   return (
//     <Flex h="86vh">
//       <Box flex={1} display="flex" alignItems="end" alignSelf="center" justifyContent="center" border="1px" h="50vh" bg="red">
//         <Menu>
//           <MenuButton as={Button} rightIcon={<ChevronDownIcon />} textAlign={"left"}>
//             Type of Services
//           </MenuButton>
//           <MenuList>
//             <MenuItem>Home</MenuItem>
//             <MenuItem>Services</MenuItem>
//             <MenuItem>About Us</MenuItem>
//             <MenuItem>Contact</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>
//       <Box flex={2} position="relative">
//         <Image src="https://via.placeholder.com/1800x1200.png" alt="Background Image" objectFit="cover" objectPosition="right" h="100%" />
//       </Box>
//     </Flex>
//   );
// }

// export default Home;

import React from "react";
import { ReactComponent as Down } from "feather-icons/dist/icons/chevron-down.svg";

const Home = (theme) => {
  return (
    <>
      {/* <div class="bg-blue-700 text-4xl h-screen grid-cols-2 flex justify-center justify-self-center	place-content-center	">
        <div class="bg-green-400 w-1/3">A</div>
        <div class="bg-cyan-500 w-2/3 h-full">B</div>
      </div> */}
      {/* <div className="hero  w-full h-full bg-amber-600">
        <div className="hero-content flex-col lg:flex-row-reverse bg-green-200 w-full">
          <div className="text-center lg:text-left bg-sky-400">
            <img src={hero} class="max-w-sm rounded-lg w-screen" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-500">
            <div className="card-body"></div>
          </div>
        </div>
      </div> */}
      <div className="relative bg-second bg-hero bg-contain	bg-no-repeat bg-right	bg-origin-content	bg-width">
        <div className="flex flex-col md:flex-row lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24 ">
          <div className="relative lg:w-4/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
            <div className="bg-first lg:w-full text-center mx-auto max-w-lg card shadow-xl">
              <div className="card-body ">
                <div className="font-bold text-3xl md:text-xl lg:text-4xl text-second leading-tight align-top text-left pb-[14rem]">
                  You can choose the services you want to get from us
                </div>
                <div className="dropdown dropdown-end">
                  <button tabIndex={0} className="btn border-0 bg-white capitalize w-full justify-between font-normal text-black hover:text-white">
                    Type of Service
                    <Down />
                  </button>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a href>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
            <div className="flex justify-center lg:justify-end items-center">
              {/* <img src={hero} class="min-w-0 w-full max-w-lg xl:max-w-3xl" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
