// // import { Button, Box, Text } from "@chakra-ui/react";

// // const Nav = () => {
// //   return (
// //     <>
// //       <Box
// //         p={7}
// //         display="flex"
// //         justifyContent="space-between"
// //         alignItems="center"
// //         bg="#142850"
// //         flexDirection={{
// //           base: "column",
// //           md: "row"
// //         }}
// //       >
// //         <Box w="80%" display="flex" justifyContent="space-between" alignItems="center" margin="auto">
// //           <Box w="40%">
// //             <Text fontSize="2rem">Mayds</Text>
// //           </Box>
// //           <Box display="flex" flexDirection="row" w="60%" justifyContent="space-between" alignItems="center">
// //             <Box
// //               display="flex"
// //               flexDirection={{
// //                 base: "column",
// //                 md: "row"
// //               }}
// //               justifyContent="space-between"
// //               alignItems="center"
// //               w="60%"
// //             >
// //               <Text fontSize="1rem">Home</Text>
// //               <Text fontSize="1rem">Services</Text>
// //               <Text fontSize="1rem">About us</Text>
// //               <Text fontSize="1rem">Contact</Text>
// //             </Box>
// //             <Box w="20%">
// //               <Button bg="#00909E" color="#DAE1E7" px="10" borderRadius="full">
// //                 Login
// //               </Button>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </>
// //   );
// // };
// // export default Nav;

// // import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";

// // function Navbar() {
// //   return (
// //     <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
// //       <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
// //         <Box fontWeight="bold">Your Website Name</Box>
// //         <Box>
// //           <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
// //             <Button variant="ghost" m={2}>
// //               Home
// //             </Button>
// //             <Button variant="ghost" m={2}>
// //               Services
// //             </Button>
// //             <Button variant="ghost" m={2}>
// //               Pricing
// //             </Button>
// //             <Button variant="ghost" m={2}>
// //               About Us
// //             </Button>
// //             <Button colorScheme="blue" m={2}>
// //               Login
// //             </Button>
// //           </Flex>
// //         </Box>
// //       </Flex>
// //     </Box>
// //   );
// // }

// // export default Navbar;

// import { useState } from "react";
// import { Box, Flex, IconButton, Button } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   // const iconColor = useColorModeValue("gray.900", "gray.100");
//   const handleToggle = () => setIsOpen(!isOpen);
//   return (
//     <Box px={4} bg="#142850" color="#DAE1E7">
//       <Flex py={6} alignItems={"center"} justifyContent={"space-between"} justifySelf={"center"}>
//         <Box fontWeight="bold" fontSize="1.5rem" ml={20}>
//           Mayds
//         </Box>
//         <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
//           <Box display={{ base: "block", md: "none" }}>
//             <IconButton icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={isOpen ? "Close Menu" : "Open Menu"} onClick={handleToggle} />
//           </Box>
//           <Box display={{ base: "none", md: "block" }}>
//             <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
//               <Button variant="ghost" m={2}>
//                 Home
//               </Button>
//               <Button variant="ghost" m={2}>
//                 Services
//               </Button>
//               <Button variant="ghost" m={2}>
//                 Pricing
//               </Button>
//               <Button variant="ghost" m={2}>
//                 About Us
//               </Button>
//               <Button bg="#00909E" mx={20} px={10} borderRadius="full">
//                 Login
//               </Button>
//             </Flex>
//           </Box>
//         </Flex>
//         <Box display={{ base: "block", md: "none" }}>
//           <Box pos="absolute" top={16} right={0} left={0} zIndex={1} bg="yellow">
//             {isOpen && (
//               <Box py={2} px={4} shadow="md" borderRadius="md">
//                 <Flex alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
//                   <Button variant="ghost" m={2}>
//                     Home
//                   </Button>
//                   <Button variant="ghost" m={2}>
//                     Services
//                   </Button>
//                   <Button variant="ghost" m={2}>
//                     Pricing
//                   </Button>
//                   <Button variant="ghost" m={2}>
//                     About Us
//                   </Button>
//                   <Button colorScheme="blue" m={2}>
//                     Login
//                   </Button>
//                 </Flex>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// }

// export default Navbar;
// import React from "react";

// const NavBar = () => {
//   return (
//     <>
//       <div class="py-10 px-9 flex justify-between bg-ninth text-fourth ">
//         <div class="flex justify-between w-11/12 m-auto">
//           <div class="text-3xl font-bold px-5 text-center justify-center align-middle py-1">Mayds</div>
//           <div class="flex justify-between text-center">
//             <div class="px-5 py-2 text-lg">Home</div>
//             <div class="px-5 py-2 text-lg">Services</div>
//             <div class="px-5 py-2 text-lg">Pricing</div>
//             <div class="px-5 py-2 text-lg">About us</div>
//             <div class="px-[2.5rem] py-2 bg-tenth text-center justify-center rounded-full text-lg font-semibold">Login</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

import React, { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="py-10 px-9 flex justify-between bg-ninth text-fourth">
        <div className="px-9 flex justify-between w-11/12  m-auto">
          <div className="text-3xl font-bold px-5 text-center justify-center align-middle py-1">Mayds</div>
          <div className="sm:hidden">
            <button onClick={handleMenuToggle} className="block text-gray-400 hover:text-fourth focus:text-fourth focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {showMenu ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.929 4.929a2 2 0 0 1 2.828 0L12 9.172l4.243-4.243a2 2 0 0 1 2.828 2.828L14.828 12l4.243 4.243a2 2 0 1 1-2.828 2.828L12 14.828l-4.243 4.243a2 2 0 1 1-2.828-2.828L9.172 12 4.929 7.757a2 2 0 0 1 0-2.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2zm2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm6 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${showMenu ? "block" : "hidden"} sm:flex sm:justify-between text-center items-center`}>
            <div className="px-4 sm:px-5 py-2 text-lg">Home</div>
            <div className="px-4 sm:px-5 py-2 text-lg">Services</div>
            <div className="px-4 sm:px-5 py-2 text-lg">Pricing</div>
            <div className="px-4 sm:px-5 py-2 text-lg">About us</div>

            <div className="px-[2.5rem] py-2 bg-tenth text-center justify-center rounded-full text-lg font-semibold">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
