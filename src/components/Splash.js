import { Typography, Box, Grid, Button, ButtonGroup } from "@mui/material";
import logo from "../images/programmer-svgrepo-com.png";

const Splash = () => {
  return (
    <Grid container style={styles.container}>
      <Grid item style={styles.image}>
        <Typography variant="h2" fontWeight="600">
          Rikard
        </Typography>
        <Typography variant="h2" fontWeight="600" sx={{ padding: 0 }}>
          Vestergaard
        </Typography>
        <Typography variant="h6" fontWeight="500" color={"gray"}>
          Software developer
        </Typography>
      </Grid>
      <Grid item style={styles.image}>
        <img src={logo} alt="Programmer" width={150} />
      </Grid>
    </Grid>
  );
};

const styles = {
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    marginBottom: "2vh",
  },
};

export default Splash;
