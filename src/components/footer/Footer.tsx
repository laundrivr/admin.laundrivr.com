import { Flex, Link, Text } from "@chakra-ui/react";
import {  FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <Flex p={{ base: 4, md: 8 }} alignItems="center" justifyContent="space-between" boxShadow={"md"}>
      <Text>© {new Date().getFullYear()} Laundrivr. All rights reserved.</Text>
      <Link href="https://laundrivr.com" isExternal>
        <FaHome size={20} />
      </Link>
    </Flex>
  );
};

export default Footer;
