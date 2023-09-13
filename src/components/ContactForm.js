import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ThanksDialog from "./ThanksDialog";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [state, handleSubmit] = useForm("mbjwrqbq");

  const handleClose = () => {
    setOpenConfirmation(false);
  };

  // Use useEffect to open the dialog when state.succeeded changes
  useEffect(() => {
    if (state.succeeded) {
      setOpenConfirmation(true);
      document.getElementById("myForm").reset();
    }
  }, [state.succeeded]);

  return (
    <Box
      style={styles.container}
      component="form"
      onSubmit={handleSubmit}
      id="myForm"
    >
      <ThanksDialog open={openConfirmation} handleClose={handleClose} />
      <Box style={styles.field}>
        <Typography variant="h3" fontWeight="600">
          Get in touch
        </Typography>
      </Box>

      <Box style={styles.field}>
        <Typography variant="body1" style={styles.title}>
          What's your e-mail?
        </Typography>
        <TextField
          label="Enter your email adress"
          variant="outlined"
          fullWidth
          required
          id="email"
          type="email"
          name="email"
        ></TextField>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Box>
      <Box style={styles.field}>
        <Typography variant="body1" style={styles.title}>
          Message
        </Typography>
        <TextField
          label="Enter message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          id="message"
          name="message"
        ></TextField>
      </Box>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Box style={styles.field}>
        <Button variant="outlined" type="submit" disabled={state.submitting}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5vw",
    flexDirection: "column",
  },
  title: {
    marginBottom: "1vh",
  },
  field: {
    width: "100%",
    maxWidth: 500,
    padding: "1vw",
  },
};

export default ContactForm;
