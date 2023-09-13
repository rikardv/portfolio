import { Box } from "@mui/material";
import BasicTabs from "./BasicTabs";
import Footer from "./Footer";
import Splash from "./Splash";
import "./Content.css";

const ContentContainer = () => {
  return (
    <Box style={styles.container} className="container">
      <Splash />
      <Footer />
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default ContentContainer;
