import { Box, CircularProgress, Flex } from "@chakra-ui/react";

const CallbackPage = () => {
  return (
    <Box backgroundColor="#f7fafc" p={6} flex="1">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <CircularProgress isIndeterminate size={"50px"}/>
      </Flex>
    </Box>
  );
};

export default CallbackPage;
