import { Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Box backgroundColor="#f7fafc" p={6} flex="1">
      <h1>Home</h1>
      {isAuthenticated && <p>You are logged in</p>}
    </Box>
  );
};

export default HomePage;
