import React from "react";
import { Flex, Box, useMediaQuery } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <Flex direction="column" width="100vw" height="100vh">
    <Flex direction="column" width="100%" height="10%" justifyContent="center">
      <Header />
    </Flex>

    <Box width="100%" height="80%">
      {children}
    </Box>

    <Flex width="100%" height="10%" justifyContent="center" alignItems="center">
      <Footer />
    </Flex>
  </Flex>
);

export default Layout;
