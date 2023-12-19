import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue, atom, useSetRecoilState } from "recoil";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { AtSignIcon, LockIcon } from "@chakra-ui/icons";

const loginState = atom({
  key: "loginState",
  default: false,
});

const jwtState = atom({
  key: "jwtState",
  default: "",
});

const LoginForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setLogin = useSetRecoilState(loginState);
  const login = useRecoilValue(loginState);
  const setJwt = useSetRecoilState(jwtState);
  const handleShowClick = () => setShowPassword(!showPassword);
  if (login) {
    return <Navigate replace to="/" />;
  } else
    return (
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome {login}</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form
              onSubmit={async (event) => {
                const res = await props.loginHandler(event, email, password);
                setLogin(res.status);
                if (res.status === true) {
                  setJwt(res.token);
                }
              }}
            >
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<AtSignIcon color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<LockIcon color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{" "}
          <Link color="teal.500" href="/register">
            Sign Up
          </Link>
        </Box>
      </Flex>
    );
};

export default LoginForm;
