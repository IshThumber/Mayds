import { Button, Box, Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <>
      <Box
        p={7}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#142850"
        flexDirection={{
          base: "column",
          md: "row"
        }}
      >
        <Box w="80%" display="flex" justifyContent="space-between" alignItems="center" margin="auto">
          <Box w="40%">
            <Text fontSize="2rem">Mayds</Text>
          </Box>
          <Box display="flex" flexDirection="row" w="60%" justifyContent="space-between" alignItems="center">
            <Box
              display="flex"
              flexDirection={{
                base: "column",
                md: "row"
              }}
              justifyContent="space-between"
              alignItems="center"
              w="60%"
            >
              <Text fontSize="1rem">Home</Text>
              <Text fontSize="1rem">Services</Text>
              <Text fontSize="1rem">About us</Text>
              <Text fontSize="1rem">Contact</Text>  
            </Box>
            <Box w="20%">
              <Button bg="#00909E" color="#DAE1E7" px="10" borderRadius="full">
                Login
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Nav;
