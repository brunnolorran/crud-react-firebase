import React from "react";
import reactDOOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

reactDOOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
