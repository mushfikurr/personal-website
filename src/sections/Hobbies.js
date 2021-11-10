import { forwardRef } from "react";
import CenteredContent from "../components/CenteredContent";

export const Hobbies = forwardRef((_, ref) => {
  return (
    <>
      <div id="hobbies" ref={ref}>
        <CenteredContent title="hobbies">
          <p>
            🚧 I'm currently working on this section. It'll be good I promise!
          </p>
        </CenteredContent>
      </div>
    </>
  );
});
