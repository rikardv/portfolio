import {
  faJava,
  faNodeJs,
  faPython,
  faRaspberryPi,
  faReact,
  faReacteurope,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
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
    <ScrollContainer style={{ pointerEvents: "none" }}>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <ContentContainer />
        </Animator>
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
            This was a project
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
            Developed using Python and React Native
          </Typography>
        </ProjectCard>
      </ScrollPage>
      <ScrollPage>
        <ProjectCard color={MY_COLORS.yellow}>
          <Typography variant="h2" fontWeight="500">
            Montecarlo ray tracer <FontAwesomeIcon icon={faJava} />
          </Typography>
          <Typography variant="h6" fontWeight="500">
            Developed using Python and React Native
          </Typography>
          <Typography variant="body1" fontWeight="200">
            Developed using Python and React Native
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
