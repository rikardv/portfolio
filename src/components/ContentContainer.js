import { Box } from "@mui/material";
import BasicTabs from "./BasicTabs";
import Footer from "./Footer";
import Splash from "./Splash";

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
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
  },
};

export default ContentContainer;
