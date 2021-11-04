import { Typography, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { forwardRef } from "react";
import CenteredContent from "../components/CenteredContent";
import ProjectContainer from "../components/ProjectContainer";

export const Projects = forwardRef((_, ref) => {
  return (
    <>
      <div id="projects" ref={ref}>
        <CenteredContent>
          <Typography>
            <Typography>
              <h1>
                <span style={{ color: grey[700] }}>#</span>
                <span> projects</span>
              </h1>
            </Typography>
          </Typography>
          <ProjectContainer />
        </CenteredContent>
      </div>
    </>
  );
});
