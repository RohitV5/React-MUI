import React from "react";
import "./App.css";
import { Button, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./themes/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Button variant="contained">Hello</Button>
        <Typography variant="h2">Hi I am typography</Typography>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
