import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const FourOhFourPage = () => {
  return (
    <Box backgroundColor="gray.50" p={6} flex="1">
      <Flex
        justifyContent="flex-start"
        alignItems="center"
        height="100%"
        direction="column"
        textAlign={"center"}
      >
        <Heading size={"4xl"} fontWeight={"medium"} mb={4}>
          404
        </Heading>
        <Text>
          The page you are looking for does not exist. Please check the URL and
          try again.
        </Text>
      </Flex>
    </Box>
  );
};

export default FourOhFourPage;
