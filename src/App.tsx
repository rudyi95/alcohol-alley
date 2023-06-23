import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Routes from "./Routes";

import { theme } from "src/utils/constants/ui";

import "./App.css";

import { Provider } from "react-redux";
import { setupStore } from "src/redux/store";

const App: React.FC = () => {
  const store = setupStore();

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Routes />
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};

export default App;
