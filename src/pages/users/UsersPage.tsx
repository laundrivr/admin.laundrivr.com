import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const UsersPage = () => {
  return (
    <Box backgroundColor="gray.50" p={6} flex="1">
      <Heading size="lg" fontWeight={"medium"} mb={4}>
        Users
      </Heading>
      <Text>Manage users here.</Text>
      <SimpleGrid columns={{ base: 1 }} spacing={6} mt={8}>
        <Box p={4} backgroundColor="white" borderRadius="md" boxShadow="md">
          <TableExample />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

const TableExample = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Modify and administrate users.</TableCaption>
        <Thead>
          <Tr>
            <Th>email</Th>
            <Th>user id</Th>
            <Th isNumeric>loads available</Th>
            <Th isNumeric>manual override</Th>
            <Th isNumeric>actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>jacob@yakovliam.com</Td>
            <Td>00000-00000-00000</Td>
            <Td isNumeric>100</Td>
            <Td isNumeric>
              <Checkbox isChecked />
            </Td>
            <Td isNumeric>
              <HStack spacing={2} justifyContent="flex-end">
                <Button size="sm" colorScheme="blue">
                  Edit
                </Button>
                <Button size="sm" colorScheme="red">
                  Delete
                </Button>
              </HStack>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>email</Th>
            <Th>user id</Th>
            <Th isNumeric>loads available</Th>
            <Th isNumeric>manual override</Th>
            <Th isNumeric>actions</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default UsersPage;
