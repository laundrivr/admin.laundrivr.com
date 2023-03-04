import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const DashboardPage = () => {
  return (
    <Box backgroundColor="#f7fafc" p={6} flex="1">
      <Heading size="lg" fontWeight={"medium"} mb={4}>
        Dashboard
      </Heading>
      <Text>Important metrics at a glance</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={8}>
        <Box p={4} backgroundColor="white" borderRadius="md" boxShadow="sm">
          <Heading size="md" fontWeight={"medium"}>
            Total Orders
          </Heading>
          <Text>100</Text>
        </Box>

        <Box p={4} backgroundColor="white" borderRadius="md" boxShadow="sm">
          <Heading size="md" fontWeight={"medium"}>
            Total Orders
          </Heading>
          <Text>100</Text>
        </Box>

        <Box p={4} backgroundColor="white" borderRadius="md" boxShadow="sm">
          <Heading size="md" fontWeight={"medium"}>
            Total Orders
          </Heading>
          <Text>100</Text>
        </Box>

        <Box
          p={4}
          backgroundColor="white"
          borderRadius="md"
          boxShadow="sm"
          gridColumn={{ base: "span 3" }}
        >
          <Heading size="md" fontWeight={"medium"}>
            Fill total width
          </Heading>
          <Text>100</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DashboardPage;
