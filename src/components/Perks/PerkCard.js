import { Box, Stack, Typography } from "@mui/material";

import gsap from "gsap";
import { useEffect } from "react";

const PerkCard = ({ text, title, Icon }) => {
  useEffect(() => {
    gsap.to(".perkCard ", {
      opacity: 1,
      y: 0,
      delay: 0.25,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".perkCard h2",
        start: "top 90%",
      },
    });
  }, []);
  return (
    <Box
      className="perkCard"
      sx={{
        flexDirection: "column",
        width: {
          xs: "90%",
          sm: "45%",
          md: "30%",
        },
      }}
    >
      <Stack alignItems={"center"}>
        {Icon && (
          <Icon
            className="cardIcon"
            sx={{
              boxSizing: "content-box",
              background: "#0092ff",
              color: "white",
              padding: ".55em",
              borderRadius: "50%",
            }}
            fontSize="medium"
          />
        )}
        <Typography
          variant="body"
          sx={{
            pt: ".5em",
          }}
          fontWeight="400"
          fontSize="1.2em"
        >
          {title}
        </Typography>
        <Typography
          variant="body"
          sx={{
            pt: "1em",
          }}
          fontWeight="300"
          fontSize=".8em"
          className="secondary"
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PerkCard;
