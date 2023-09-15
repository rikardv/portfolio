import { Box } from "@mui/material";
import BasicTabs from "./BasicTabs";
import Footer from "./Footer";
import Splash from "./Splash";
import "./Content.css";

const ContentContainer = () => {
  return (
    <Box style={styles.container}>
      <Splash />
      <Footer />
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
};

export default ContentContainer;
