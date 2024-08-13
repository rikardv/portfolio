import { Box, Button, Container, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from "../gsap/HeroSectionAnimation";
import rikardImage from "../images/rikard-grad2.png";
import Pdf from "../docs/rikard.pdf";
import Perks from "./Perks/Perks";

export const btnStyles = {
  backgroundColor: "black",
};

const Hero = () => {
  const ref = useRef();
  const q = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    HeroSectionAnimation(q);
  }, []);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        height: "100vh", // Ensure full viewport height
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "2em", sm: "5em" }, // Adjust padding for mobile
        position: "relative", // Required for absolute positioning of the background image
        overflow: "hidden", // Hide any overflow from the background image
      }}
    >
      {/* Background Image for mobile */}
      <Box
        sx={{
          position: { xs: "absolute", md: "relative" },
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: { xs: `url(${rikardImage})`, md: "none" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Ensure it is behind the content
          display: { xs: "block", md: "none" }, // Display only on mobile
        }}
      />

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }} // Stack elements on mobile
      >
        <Box ref={ref} sx={{ textAlign: { xs: "center", md: "left" } }}>
          {" "}
          {/* Center text on mobile */}
          <Typography
            className="t1"
            variant="h1"
            sx={{
              fontSize: {
                xs: "3.4em",
                sm: "4.4em",
                md: "4.8em",
              },
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
              opacity: 0,
              pt: "1em",
              fontWeight: "900",
            }}
          >
            Transforming Ideas
            <br /> into Digital Reality
          </Typography>
          <Typography
            variant="h3"
            className="secondary t2 t25o0"
            sx={{
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
              pt: "1.5em",
              fontSize: {
                xs: ".9em",
                sm: "1em",
              },
              maxWidth: "570px",
              fontWeight: "300",
              mx: { xs: "auto", md: 0 }, // Center content on mobile
            }}
          >
            Hi. I'm Rikard Vestergaard. I'm passionate about enhancing
            human-machine interactions by creating intuitive and effective web
            and mobile experiences. I focus on using the latest technologies and
            clean design principles to craft solutions that truly resonate with
            users and meet their needs.
          </Typography>
          <Box
            sx={{
              my: "2.5em",
              gap: ".8em",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" }, // Center buttons on mobile
            }}
          >
            <Typography
              variant="overline"
              fontWeight="500"
              component="a"
              href={Pdf}
              target="_blank"
              sx={{ pointerEvents: "visible", color: "inherit" }}
            >
              Download resume
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderRadius: "6px",
            marginRight: { xs: "0", md: "5em" }, // Remove margin on mobile
            marginLeft: { xs: "0", md: "5em" }, // Remove margin on mobile
            marginTop: { xs: "2em", md: "0" }, // Add margin on top for mobile
            width: {
              xs: "100%",
              sm: "350px",
              md: "400px",
            },
            display: { xs: "none", md: "block" }, // Hide image on mobile
          }}
        >
          <Box
            className="mainBox"
            sx={{
              opacity: 0,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              height: "460px",
              boxShadow: {
                xs: ".5em 3em 0 #313131 ",
                sm: "2em 3em 0px #313131",
              },
            }}
          >
            <img
              layout="fill"
              style={{
                opacity: 0,
                borderRadius: "6px",
                zIndex: "2",
              }}
              className="img1"
              src={rikardImage}
              alt="Personal Image"
            />
            <Box
              className="gradientBg"
              sx={{
                width: "100px",
                height: "100px",
                zIndex: "0",
                position: "absolute",
                right: {
                  xs: "-1%",
                  sm: "-5%",
                },
                opacity: 0,
                bottom: "-5%",
                background: "transparent",
                backgroundImage: "radial-gradient(white 2px, transparent 0)",
                backgroundSize: "15px 13px",
              }}
            ></Box>
            <Box
              className="quoteBox"
              sx={{
                zIndex: "2",
                position: "absolute",
                bottom: {
                  xs: "0%",
                  lg: "-5%",
                },
                width: "100%",
                right: {
                  sm: "25%",
                },
                top: "105%",
                overflow: "hidden",
                opacity: 0,
                background: "#1d1d1f",
                borderRadius: "6px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "300",
                  fontSize: ".85em",
                  padding: "1em",
                }}
              >
                {`"In the world of software, the best way to predict the future is to invent it."`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
