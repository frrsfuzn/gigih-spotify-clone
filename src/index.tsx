import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ChakraProvider,
  ColorModeScript,
  DeepPartial,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import { store } from "./app/store";
import { Provider } from "react-redux";

const config: DeepPartial<ThemeConfig> = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
