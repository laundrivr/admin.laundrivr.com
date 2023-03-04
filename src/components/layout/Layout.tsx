import { Box, Flex } from "@chakra-ui/react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";

const Layout = ({ children }: any) => {
  return (
    <Flex maxW="100vw" minH="100vh" direction="column" p={0} m={0}>
      <NavBar />
      <Flex flex="1" p={0} m={0} alignItems="stretch" display="flex">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
