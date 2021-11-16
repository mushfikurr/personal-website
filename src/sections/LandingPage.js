import { Grid, Typography, SvgIcon, Stack, Item } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typist from "react-typist";
import FadeLink from "../components/FadeLink";
import FadeIcon from "../components/FadeIcon";
import { icons } from "../components/IconPaths";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  content: {
    height: "100vh",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
}));

const renderIconList = (_) => {
  return (
    <Stack direction="row" spacing={2}>
      <FadeIcon
        iconPath={icons.github}
        link={"https://github.com/mushfikurr"}
        transitionDelay="1200ms"
      />
      <FadeIcon iconPath={icons.twitter} transitionDelay="1300ms" />
      <FadeIcon iconPath={icons.linkedin} transitionDelay="1400ms" />
    </Stack>
  );
};

const renderHeading = (_) => {
  return (
    <>
      <Typography style={{ fontSize: "3.5rem", fontWeight: 500 }}>
        <Typist startDelay={300} cursor={{ blink: true }}>
          @mushfikurr
        </Typist>
      </Typography>
    </>
  );
};

const renderMenu = (_) => {
  return (
    <>
      <FadeLink
        withScroll={true}
        fontSize={"1.05rem"}
        link="/main#about"
        transitionDelay="1500ms"
        text="about me"
      />
      <FadeLink
        withScroll={true}
        fontSize={"1.05rem"}
        link="/main#projects"
        transitionDelay="1600ms"
        text="projects"
      />
      <FadeLink
        withScroll={true}
        fontSize={"1.05rem"}
        transitionDelay="1700ms"
        link="/main#hobbies"
        text="hobbies"
      />
    </>
  );
};

function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={300}>
        <div className={classes.content}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.container}
          >
            <Grid item xs={12} align="center">
              {renderHeading()}
            </Grid>
            {renderIconList()}
            <Grid item align="center" xs={12}>
              {renderMenu()}
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
}

export default LandingPage;
