import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box style={styles.container}>
      <Typography variant="body1" color="gray">
        Scroll down to see my recent projects
      </Typography>
      {/* <FontAwesomeIcon icon={faArrowDown} bounce size="lg" color="gray" /> */}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
  },
};

export default Footer;
