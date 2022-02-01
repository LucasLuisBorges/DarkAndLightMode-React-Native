import React from "react";
import { ThemeProvider } from "styled-components";

import { Home } from "./src/screens/Home";
import themes from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <Home />
    </ThemeProvider>
  );
};