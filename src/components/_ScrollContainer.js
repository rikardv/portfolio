import {
  faJava,
  faNodeJs,
  faPython,
  faRaspberryPi,
  faReact,
  faReacteurope,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography, Button } from "@mui/material";
import { useEffect, useReducer } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import { MY_COLORS } from "../appleColors";
import ContentContainer from "./ContentContainer";
import ProjectCard from "./ProjectCard";
import Splash from "./Splash";
import Pdf from "../docs/rikard.pdf";
import Hero from "./Hero";
import Perks from "./Perks/Perks";

const _ScrollContainer = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    forceUpdate();
  };

  return (
    <ScrollContainer>
      <ScrollPage>
        <Hero />
      </ScrollPage>

      <ScrollPage>
        <Perks />
      </ScrollPage>

      <ScrollPage>
        <ProjectCard color={MY_COLORS.gray}>
          <Typography variant="h2" fontWeight="500">
            Urban Explorer Sverige <FontAwesomeIcon icon={faSwift} />+
            <FontAwesomeIcon icon={faPython} />
          </Typography>
          <Typography variant="h6" fontWeight="500">
            Developed using SwiftUI with a Python backend
          </Typography>
          <Typography variant="body1" fontWeight="200">
            Discover the hidden gems of Sweden with Urban Explorer Sverige. This
            community-based app allows users to share their favorite spots and
            discuss with each other. Built with a modern SwiftUI interface,
            users can easily navigate the app and find new places to explore.
            The Python backend ensures smooth data processing and finds new
            spots with AI.
          </Typography>
          {/* Download in App Store image here */}

          <a
            href="https://apps.apple.com/se/app/urban-explorer-sverige/id6547833109?itsct=apps_box_badge&amp;itscg=30200"
            style={{
              display: "inline-block",
              overflow: "hidden",
              borderRadius: "13px",
              width: "250px",
              height: "83px",
            }}
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1723507200"
              alt="Download on the App Store"
              style={{ borderRadius: "13px" }}
            />
          </a>
        </ProjectCard>
      </ScrollPage>

      <ScrollPage>
        <ProjectCard color={MY_COLORS.blue}>
          <Typography variant="h2" fontWeight="500">
            Sentimenty <FontAwesomeIcon icon={faReact} />+
            <FontAwesomeIcon icon={faPython} />
          </Typography>
          <Typography variant="h6" fontWeight="500">
            Developed using Python and React Native
          </Typography>
          <Typography variant="body1" fontWeight="200">
            This React Native app leverages TF-IDF (Term Frequency-Inverse
            Document Frequency) to generate concise summaries of tweets, making
            it easier for users to quickly grasp the essence of the content.
            Additionally, it utilizes Sentiment140 to determine the sentiment of
            the tweets, providing valuable insights into public sentiment around
            various topics on Twitter. With a Python backend, this app combines
            the power of natural language processing and sentiment analysis to
            enhance your Twitter experience. <br></br>Key Features: <br></br>
            <ul>
              <li>Tweet summarization using TF-IDF techniques.</li>
              <li>Sentiment analysis of tweets using Sentiment140.</li>
              <li>
                React Native front-end for a user-friendly mobile experience.
              </li>
              <li> Python-based backend for efficient data processing.</li>
            </ul>
          </Typography>
          <Typography
            variant="overline"
            fontWeight="500"
            component="a"
            href={"https://github.com/rikardv"}
            target="_blank"
            sx={{
              pointerEvents: "visible",
              color: "inherit",
            }}
          >
            Link to project
          </Typography>
        </ProjectCard>
      </ScrollPage>
      <ScrollPage>
        <ProjectCard color={MY_COLORS.pink} inverse>
          <Typography variant="h2" fontWeight="500">
            Doorman <FontAwesomeIcon icon={faReact} />+
            <FontAwesomeIcon icon={faJava} />+
            <FontAwesomeIcon icon={faRaspberryPi} />
          </Typography>
          <Typography variant="h6" fontWeight="500">
            Developed using React Native, Java and Raspberry Pi
          </Typography>
          <Typography variant="body1" fontWeight="200">
            This personal project combines the power of React Native for the
            frontend and Java for the backend to create a sophisticated home
            automation system. Using GPS tracking, it intelligently manages your
            home's lighting and integrates with Hyresbostäder and Aptus door
            locks for enhanced security. A Raspberry Pi with a 433MHz
            transmitter serves as the bridge to control your lights, ensuring
            they're on when you're home and off when you're away.
            <br></br>Key Features: <br></br>
            <ul>
              <li>
                React Native Frontend: A user-friendly mobile interface for
                seamless control.
              </li>
              <li>
                Java Backend: Efficiently manages the logic and communication.
              </li>
              <li>
                GPS-Based Lighting Control: Lights adapt to your presence,
                maximizing energy efficiency.
              </li>
              <li>
                Syncs with Hyresbostäder and Aptus door locks for added
                convenience.
              </li>
              <li>
                Raspberry Pi Integration: A hardware component for reliable
                lighting control.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="overline"
            fontWeight="500"
            component="a"
            href={"https://github.com/rikardv"}
            target="_blank"
            sx={{
              pointerEvents: "visible",
              color: "inherit",
            }}
          >
            Link to project
          </Typography>
        </ProjectCard>
      </ScrollPage>
      <ScrollPage>
        <ProjectCard color={MY_COLORS.yellow}>
          <Typography variant="h2" fontWeight="500">
            Montecarlo ray tracer <FontAwesomeIcon icon={faJava} />
          </Typography>
          <Typography variant="h6" fontWeight="500">
            Developed using Java
          </Typography>
          <Typography variant="body1" fontWeight="200">
            Developed entirely from scratch, this project leverages the power of
            Monte Carlo methods to simulate complex light interactions,
            rendering stunning and realistic images.
            <br></br>Key Features: <br></br>
            <ul>
              <li>
                Monte Carlo Rendering: A sophisticated technique for accurate
                and efficient light simulation.
              </li>
              <li>
                Java Implementation: Crafted entirely in Java for platform
                independence.
              </li>
              <li>
                Custom Engine: Built from the ground up, giving you full control
                over the rendering process.
              </li>
              <li>
                Realistic Images: Produce high-quality, photorealistic images
                and scenes.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="overline"
            fontWeight="500"
            component="a"
            href={"https://github.com/rikardv"}
            target="_blank"
            sx={{
              pointerEvents: "visible",
              color: "inherit",
            }}
          >
            Link to project
          </Typography>
        </ProjectCard>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <Typography variant="h3">Connect with me</Typography>
          <br />
          <Stack direction="column">
            <Typography
              variant="overline"
              fontWeight="500"
              component="a"
              href="mailto:rikardvestergaard@gmail.com?subject = Feedback&body = Message"
              target="_blank"
              sx={{ pointerEvents: "visible", color: "inherit" }}
            >
              Email
            </Typography>
            <Typography
              variant="overline"
              fontWeight="500"
              component="a"
              href={"https://github.com/rikardv"}
              target="_blank"
              sx={{
                pointerEvents: "visible",
                color: "inherit",
              }}
            >
              GitHub
            </Typography>
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
          </Stack>
          <Typography variant="subtitle1">© 2023 Rikard Vestergaard</Typography>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default _ScrollContainer;
