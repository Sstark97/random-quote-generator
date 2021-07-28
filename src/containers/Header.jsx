import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import { HiOutlineRefresh } from "react-icons/hi";

const Header = () => (
  <Flex justifyContent="flex-end" width="100%" alignItems="center">
    <Button variant="ghost" _hover="none" marginRight="10rem">
      <Text marginRight="0.5rem" fontSize="1.8rem">
        random
      </Text>
      <HiOutlineRefresh size="1.6rem" />
    </Button>
  </Flex>
);

export default Header;
