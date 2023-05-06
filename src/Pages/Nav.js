// // // import { Button, Box, Text } from "@chakra-ui/react";

// // // const Nav = () => {
// // //   return (
// // //     <>
// // //       <Box
// // //         p={7}
// // //         display="flex"
// // //         justifyContent="space-between"
// // //         alignItems="center"
// // //         bg="#142850"
// // //         flexDirection={{
// // //           base: "column",
// // //           md: "row"
// // //         }}
// // //       >
// // //         <Box w="80%" display="flex" justifyContent="space-between" alignItems="center" margin="auto">
// // //           <Box w="40%">
// // //             <Text fontSize="2rem">Mayds</Text>
// // //           </Box>
// // //           <Box display="flex" flexDirection="row" w="60%" justifyContent="space-between" alignItems="center">
// // //             <Box
// // //               display="flex"
// // //               flexDirection={{
// // //                 base: "column",
// // //                 md: "row"
// // //               }}
// // //               justifyContent="space-between"
// // //               alignItems="center"
// // //               w="60%"
// // //             >
// // //               <Text fontSize="1rem">Home</Text>
// // //               <Text fontSize="1rem">Services</Text>
// // //               <Text fontSize="1rem">About us</Text>
// // //               <Text fontSize="1rem">Contact</Text>
// // //             </Box>
// // //             <Box w="20%">
// // //               <Button bg="#00909E" color="#DAE1E7" px="10" borderRadius="full">
// // //                 Login
// // //               </Button>
// // //             </Box>
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </>
// // //   );
// // // };
// // // export default Nav;

// // // import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";

// // // function Navbar() {
// // //   return (
// // //     <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
// // //       <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
// // //         <Box fontWeight="bold">Your Website Name</Box>
// // //         <Box>
// // //           <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
// // //             <Button variant="ghost" m={2}>
// // //               Home
// // //             </Button>
// // //             <Button variant="ghost" m={2}>
// // //               Services
// // //             </Button>
// // //             <Button variant="ghost" m={2}>
// // //               Pricing
// // //             </Button>
// // //             <Button variant="ghost" m={2}>
// // //               About Us
// // //             </Button>
// // //             <Button colorScheme="blue" m={2}>
// // //               Login
// // //             </Button>
// // //           </Flex>
// // //         </Box>
// // //       </Flex>
// // //     </Box>
// // //   );
// // // }

// // // export default Navbar;

// // import { useState } from "react";
// // import { Box, Flex, IconButton, Button } from "@chakra-ui/react";
// // import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// // function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   // const iconColor = useColorModeValue("gray.900", "gray.100");
// //   const handleToggle = () => setIsOpen(!isOpen);
// //   return (
// //     <Box px={4} bg="#142850" color="#DAE1E7">
// //       <Flex py={6} alignItems={"center"} justifyContent={"space-between"} justifySelf={"center"}>
// //         <Box fontWeight="bold" fontSize="1.5rem" ml={20}>
// //           Mayds
// //         </Box>
// //         <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
// //           <Box display={{ base: "block", md: "none" }}>
// //             <IconButton icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={isOpen ? "Close Menu" : "Open Menu"} onClick={handleToggle} />
// //           </Box>
// //           <Box display={{ base: "none", md: "block" }}>
// //             <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
// //               <Button variant="ghost" m={2}>
// //                 Home
// //               </Button>
// //               <Button variant="ghost" m={2}>
// //                 Services
// //               </Button>
// //               <Button variant="ghost" m={2}>
// //                 Pricing
// //               </Button>
// //               <Button variant="ghost" m={2}>
// //                 About Us
// //               </Button>
// //               <Button bg="#00909E" mx={20} px={10} borderRadius="full">
// //                 Login
// //               </Button>
// //             </Flex>
// //           </Box>
// //         </Flex>
// //         <Box display={{ base: "block", md: "none" }}>
// //           <Box pos="absolute" top={16} right={0} left={0} zIndex={1} bg="yellow">
// //             {isOpen && (
// //               <Box py={2} px={4} shadow="md" borderRadius="md">
// //                 <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
// //                   <Button variant="ghost" m={2}>
// //                     Home
// //                   </Button>
// //                   <Button variant="ghost" m={2}>
// //                     Services
// //                   </Button>
// //                   <Button variant="ghost" m={2}>
// //                     Pricing
// //                   </Button>
// //                   <Button variant="ghost" m={2}>
// //                     About Us
// //                   </Button>
// //                   <Button colorScheme="blue" m={2}>
// //                     Login
// //                   </Button>
// //                 </Flex>
// //               </Box>
// //             )}
// //           </Box>
// //         </Box>
// //       </Flex>
// //     </Box>
// //   );
// // }

// // export default Navbar;
// // import React from "react";

// // const NavBar = () => {
// //   return (
// //     <>
// //       <div class="py-10 px-9 flex justify-between bg-ninth text-fourth ">
// //         <div class="flex justify-between w-11/12 m-auto">
// //           <div class="text-3xl font-bold px-5 text-center justify-center align-middle py-1">Mayds</div>
// //           <div class="flex justify-between text-center">
// //             <div class="px-5 py-2 text-lg">Home</div>
// //             <div class="px-5 py-2 text-lg">Services</div>
// //             <div class="px-5 py-2 text-lg">Pricing</div>
// //             <div class="px-5 py-2 text-lg">About us</div>
// //             <div class="px-[2.5rem] py-2 bg-tenth text-center justify-center rounded-full text-lg font-semibold">Login</div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default NavBar;

// import React, { useState } from "react";
// import Mayds from "../assets/Mayds.png";

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <div className="py-8 px-9 flex justify-between bg-ninth text-fourth">
//         <div className="px-9 flex justify-between w-11/12  m-auto">
//           <div className="text-3xl font-bold px-5 text-center justify-center align-middle py-1">
//             <img src={Mayds} alt="" className="h-8 object-contain aspect-auto	" />
//           </div>
//           <div className={`${showMenu ? "block" : "hidden"} sm:flex sm:justify-between text-center items-center`}>
//             <div className="px-4 sm:px-5 py-2 text-lg">Home</div>
//             <div className="px-4 sm:px-5 py-2 text-lg">Services</div>
//             <div className="px-4 sm:px-5 py-2 text-lg">Pricing</div>
//             <div className="px-4 sm:px-5 py-2 text-lg">About us</div>

//             <div className="px-[2.5rem] py-2 bg-tenth text-center justify-center rounded-full text-lg font-semibold">Login</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative bg-ninth text-fourth py-2">
        <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between">
            <a href="/" aria-label="Company" title="mayds" class="inline-flex items-center">
              <span class="ml-2 text-2xl font-bold tracking-wide uppercase">Mayds</span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Our product"
                  title="Our product"
                  class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Product pricing"
                  title="Product pricing"
                  class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  About us
                </a>
              </li>
            </ul>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  class="inline-flex items-center justify-center h-fit py-2 -ml-4 px-10 font-medium tracking-wide text-white transition duration-200 shadow-md bg-eighth hover:bg-tenth focus:shadow-outline focus:outline-none rounded-full"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Login
                </a>
              </li>
            </ul>
            <div class="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <FaBars />
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-first border rounded shadow-sm z-auto">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                          <span class="ml-2 text-xl font-bold tracking-wide uppercase">Mayds</span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Product pricing"
                            title="Product pricing"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About us"
                            title="About us"
                            class="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-eighth hover:bg-tenth focus:shadow-outline focus:outline-none rounded-full"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Login
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
