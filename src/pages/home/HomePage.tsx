import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "0", lg: "12" }}
      py={{ base: "0", lg: "12" }}
    >
      <Stack
        direction={{ base: "column-reverse", lg: "row" }}
        spacing={{ base: "0", lg: "20" }}
      >
        <Box
          width={{ lg: "sm" }}
          transform={{ base: "translateY(-50%)", lg: "none" }}
          bg={{
            base: useColorModeValue("blue.50", "gray.700"),
            lg: "transparent",
          }}
          mx={{ base: "6", md: "8", lg: "0" }}
          px={{ base: "6", md: "8", lg: "0" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack spacing={{ base: "8", lg: "10" }}>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Heading
                size="xl"
                color={useColorModeValue("blue.500", "blue.300")}
              >
                Laundrivr
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Administration Portal
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Button variant="link">
                <Text
                  color={useColorModeValue("blue.500", "blue.300")}
                  fontWeight="bold"
                  fontSize="lg"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Text>
              </Button>
              <Icon
                color={useColorModeValue("blue.500", "blue.300")}
                as={FaArrowRight}
              />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="/landing_code_3.jpg"
            alt="Landing Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default HomePage;
