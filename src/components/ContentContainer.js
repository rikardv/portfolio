import { Box } from "@mui/material";
import BasicTabs from "./BasicTabs";
import Footer from "./Footer";
import Splash from "./Splash";
import "./Content.css";
import Hero from "./Hero";
import Perks from "./Perks/Perks";

const ContentContainer = () => {
  return (
    <Box style={styles.container}>
      <Hero />
      <Perks />
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    border: "1px solid green",
  },
};

export default ContentContainer;
