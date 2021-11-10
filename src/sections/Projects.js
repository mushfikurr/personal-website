import { forwardRef } from "react";
import CenteredContent from "../components/CenteredContent";
import ProjectContainer from "../components/ProjectContainer";

export const Projects = forwardRef((_, ref) => {
  return (
    <>
      <div id="projects" ref={ref}>
        <CenteredContent title="projects">
          <ProjectContainer />
        </CenteredContent>
      </div>
    </>
  );
});
