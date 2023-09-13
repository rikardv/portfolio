import {
  Box,
  createTheme,
  ThemeProvider,
  Typography,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";
import { ScrollContainer } from "react-scroll-motion";
import BasicTabs from "./components/BasicTabs";
import ContactForm from "./components/ContactForm";
import ContentContainer from "./components/ContentContainer";
import Splash from "./components/Splash";
import _ScrollContainer from "./components/_ScrollContainer";

let theme = createTheme({
  typography: {
    fontFamily: ["Satoshi"].join(","),
    color: "#101828",
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderView = () => {
    switch (value) {
      case 0:
        return <_ScrollContainer />;
      case 1:
        return <ContactForm />;
      default:
        return <_ScrollContainer />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      {/* <ContentContainer /> */}
      <BasicTabs value={value} handleChange={handleChange}></BasicTabs>
      {renderView()}
    </ThemeProvider>
  );
}
export default App;
