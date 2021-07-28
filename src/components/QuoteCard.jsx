import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const QuoteCard = () => {
  return (
    <Flex
      paddingLeft="9.9rem"
      borderLeft="3px solid #F7DF94"
      minWidth="71.4rem"
      paddingRight="1rem"
    >
      <Box marginTop="1rem">
        <ImQuotesLeft />
      </Box>
      <Text fontSize="3.6rem">Pepe</Text>
      <Box marginTop="1rem">
        <ImQuotesRight />
      </Box>
    </Flex>
  );
};

export default QuoteCard;
