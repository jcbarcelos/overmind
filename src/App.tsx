import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistedState";
import Form from "./components/form/index";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toogleTheme={toogleTheme} />
        <Form />
        <ToastContainer autoClose={3000} />
      </div>
    </ThemeProvider>
  );
}

export default App;
