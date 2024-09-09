import * as React from "react"
import { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
                    
          <Response />
          
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)


function Response() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // will need to change this url for GCP deployment
    // fetch("https://hello-world-k8s-api-179355965248.us-central1.run.app/message")
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <h1>{message}</h1>
  );
}