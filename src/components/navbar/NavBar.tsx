import {
  HStack,
  Flex,
  Button,
  useBreakpointValue,
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ImUserTie } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";
const NavBar = () => {
  const isDesktop = useBreakpointValue<boolean>({ base: false, lg: true });
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose,
  } = useDisclosure();
  const drawerButtonRef = useRef<HTMLButtonElement>(null);

  const handleSignIn = () => {
    loginWithRedirect();
  };

  const handleSignOut = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <Box as="section">
      <Flex
        bg="bg-surface"
        boxShadow="sm"
        direction={"column"}
        justify="flex-start"
      >
        <Flex py={{ base: "4", lg: "5" }}>
          <HStack
            w="100%"
            spacing="10"
            justify="space-between"
            px={{ base: "4", lg: "6" }}
          >
            <HStack spacing="3">
              <Button
                fontWeight={"bold"}
                variant="primary"
                onClick={() => navigate("/")}
                leftIcon={<ImUserTie />}
              >
                Laundrivr Admin
              </Button>
              {isAuthenticated && isDesktop && (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Button>
                  <Button variant="ghost" onClick={() => navigate("/users")}>
                    Users
                  </Button>
                </>
              )}
            </HStack>

            {isDesktop ? (
              <Flex justify="space-between">
                <HStack spacing="3">
                  {!isAuthenticated && (
                    <Button variant="ghost" onClick={handleSignIn}>
                      Sign In
                    </Button>
                  )}
                  {isAuthenticated && (
                    <Button variant="ghost" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  )}
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                onClick={drawerOnOpen}
              />
            )}
            {!isDesktop && (
              <Drawer
                isOpen={drawerIsOpen}
                placement="right"
                onClose={drawerOnClose}
                finalFocusRef={drawerButtonRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    <Button
                      variant="ghost"
                      onClick={() => navigate("/")}
                      leftIcon={<ImUserTie />}
                    >
                      Laundrivr Admin
                    </Button>
                  </DrawerHeader>

                  <DrawerBody>
                    {isAuthenticated && (
                      <VStack spacing="3">
                        <Button
                          variant="ghost"
                          onClick={() => navigate("/dashboard")}
                        >
                          Dashboard
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => navigate("/users")}
                        >
                          Users
                        </Button>
                      </VStack>
                    )}
                    {!isAuthenticated && (
                      <VStack spacing="3">
                        <Button variant="ghost" onClick={handleSignIn}>
                          Sign In
                        </Button>
                      </VStack>
                    )}
                  </DrawerBody>

                  {isAuthenticated && (
                    <DrawerFooter>
                      <Button variant="ghost" onClick={handleSignOut}>
                        Sign Out
                      </Button>
                    </DrawerFooter>
                  )}
                </DrawerContent>
              </Drawer>
            )}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
