import { Grid, Typography, SvgIcon, Stack, Item } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typist from "react-typist";
import FadeLink from "../components/FadeLink";
import FadeIcon from "../components/FadeIcon";
import { icons } from "../components/IconPaths";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100vh",
  },
  container: {
    minHeight: "100vh",
  },
}));

const renderIconList = (_) => {
  return (
    <Stack direction="row" spacing={2}>
      <FadeIcon
        iconPath={icons.github}
        link={"https://github.com/mushfikurr"}
      />
      <FadeIcon iconPath={icons.twitter} />
      <FadeIcon iconPath={icons.linkedin} />
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
      <FadeLink fontSize={"1.05rem"} link="/main#about" text="about me" />
      <FadeLink fontSize={"1.05rem"} link="/main#projects" text="projects" />
    </>
  );
};

function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <Grid
          container
          spacing={1}
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
    </>
  );
}

export default LandingPage;
