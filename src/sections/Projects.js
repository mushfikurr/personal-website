import { forwardRef, useEffect } from "react";
import CenteredContent from "../components/CenteredContent";
import ProjectContainer from "../components/ProjectContainer";
import { useOnScreen } from "../components/Utils";
import { useHistory } from "react-router";

export const Projects = forwardRef((_, ref) => {
  const onScreen = useOnScreen(ref, "-100px");
  const history = useHistory();

  useEffect(() => {
    if (onScreen) {
      history.push("#projects");
    }
  }, [onScreen]);

  return (
    <>
      <div id="projects" ref={ref}>
        <CenteredContent title="projects">
          <ProjectContainer onScreen={onScreen} />
        </CenteredContent>
      </div>
    </>
  );
});
