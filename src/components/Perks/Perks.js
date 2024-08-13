import { Box, Container, Typography, Divider } from "@mui/material";
import PerkCard from "./PerkCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import HandymanIcon from "@mui/icons-material/Handyman";
import HttpIcon from "@mui/icons-material/Http";
import DevicesIcon from "@mui/icons-material/Devices";
import MainTitleAnimation from "../../gsap/MainTitleAnimation";

export const centeredStyles = {
  alignItems: "center",
  textAlign: "center",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

gsap.registerPlugin(ScrollTrigger);

const perksArray = [
  {
    title: "Continuous Support",
    Icon: HandymanIcon,
    text: "I provide ongoing maintenance and updates to ensure your web-based software remains efficient and competitive. With established DevOps practices, I can quickly implement urgent updates and roll out new features on a regular schedule.",
  },
  {
    title: "Back-End Development",
    Icon: HttpIcon,
    text: "I handle the business logic and server-side functionality of your web app using reliable frameworks. I ensure seamless integration with other systems through well-structured APIs, delivering robust and scalable solutions.",
  },
  {
    title: "Front-End Design/Development",
    Icon: DevicesIcon,
    text: "I focus on understanding your target audience to design intuitive and engaging user interfaces. Once we finalize the design with stakeholders, I bring it to life using modern front-end technologies to enhance user experience.",
  },
];
const Perks = () => {
  useEffect(() => {
    MainTitleAnimation(".h1", ".h2");
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={centeredStyles}>
        <Typography
          className="h1 t25o0"
          variant="h1"
          sx={{
            fontSize: {
              xs: "2.2em",
              sm: "2.5em",
              md: "3em",
            },
          }}
          fontWeight="600"
        >
          Reliable Solutions for Your Needs
        </Typography>
        <Typography
          variant="h2"
          className="secondary h2"
          sx={{
            pt: "1.5em",
            transform: "translateY(15px)",
            opacity: 0,
            maxWidth: "570px",
            fontSize: {
              xs: ".8em",
              sm: "1em",
            },
          }}
        >
          My goal is to provide straightforward solutions that address your
          specific requirements.
        </Typography>

        <Box
          sx={{
            mt: "3em",
            display: "flex",
            flexWrap: "wrap",
            gap: "5%",
            justifyContent: {
              xs: "center",
              sm: "space-between",
            },
          }}
        >
          {perksArray.map((perk) => {
            return (
              <PerkCard
                key={perk.title}
                title={perk.title}
                text={perk.text}
                Icon={perk.Icon}
              />
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Perks;
