import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
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

const ProjectCard = ({ color, title, inverse, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: color,
      }}
    >
      <Animator animation={MoveIn(inverse ? -1000 : 1000, 0)}>
        {children}
      </Animator>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: "1vw",
    margin: "1vw",
  },
};

export default ProjectCard;
