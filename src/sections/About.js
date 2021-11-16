import { Chip, Box, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { forwardRef, useEffect } from "react";
import CenteredContent from "../components/CenteredContent";
import { useHistory } from "react-router";
import { useOnScreen } from "../components/Utils";

const useStyles = makeStyles((theme) => ({
  jump: {
    position: "relative",
    top: "0",
    "&:hover": {
      top: "-5px",
    },
    transition: "top ease 0.2s",
  },
}));

export const About = forwardRef((_, ref) => {
  const classes = useStyles();
  const history = useHistory();
  const onScreen = useOnScreen(ref, "-100px");

  useEffect(() => {
    if (onScreen) {
      history.push("#about");
    }
  }, [onScreen]);

  return (
    <>
      <div id="about" ref={ref}>
        <CenteredContent title="about me">
          <Box>
            <p className={classes.aboutMeText}>
              👋! My name is Mushfikur. I am an undergraduate Computer Science
              student based in London.
              <br />
              My first introduction to programming was at age 12, making
              modifications to a popular sandbox game Minecraft.
              <br />
              I've learnt multiple languages since then{" "}
              <small>(and proper programming practices 👀)</small> embarking on
              several passion projects that kept my love for programming alight.
              <br />
              I have a knack for creativity, so where appropriate, I always try
              to inject my own personality into things.
              <br />
              The feeling that there's potential for people to view or use
              software I have built or contributed to is always so exciting!
              <br />
              Below are technologies that I have learnt:
            </p>
            <Box textAlign="center">
              {[
                "python",
                "javascript",
                "java",
                "haskell",
                "c++",
                "flask & django",
                "react",
                "html/css",
                "consuming/designing api",
              ].map((skill, index) => {
                return (
                  <Fade
                    in={onScreen}
                    style={{
                      transitionDelay: ((40 * index) ^ 2) + 50 + "ms",
                    }}
                  >
                    <Chip
                      className={classes.jump}
                      sx={{ marginRight: "10px", marginBottom: "10px" }}
                      label={skill}
                      key={index}
                      variant="outlined"
                    />
                  </Fade>
                );
              })}
            </Box>
          </Box>
        </CenteredContent>
      </div>
    </>
  );
});
