import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/auth/Signup";
import Landing from "./pages/auth/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="signup" element={<SignUp />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
