import { Typography, Box, Grid, Button, ButtonGroup } from "@mui/material";

const Splash = () => {
  return (
    <Box style={styles.container}>
      <Grid container spacing={2} flexDirection="column">
        <Grid item>
          <Typography variant="h2" fontWeight="600">
            Rikard
          </Typography>
          <Typography variant="h2" fontWeight="600" sx={{ padding: 0 }}>
            Vestergaard
          </Typography>
          <Typography variant="h6" fontWeight="500" color={"gray"}>
            Student & part time software developer
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
};

export default Splash;
