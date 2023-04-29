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

const Home = () => {
  return (
    <>
      <div class="bg-blue-700 text-4xl h-screen grid-cols-2 flex justify-center justify-self-center	place-content-center	">
        <div class="bg-green-400 w-1/3">A</div>
        <div class="bg-cyan-500 w-2/3 h-full">B</div>
      </div>
    </>
  );
};

export default Home;
