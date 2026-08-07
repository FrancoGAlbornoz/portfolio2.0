import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Landing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;