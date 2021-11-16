import { useCallback } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  List,
  Fade,
  Slide,
  CssBaseline,
  useScrollTrigger,
  Zoom,
  Fab,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { useHistory } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FadeLink from "./FadeLink";
import FadeLinkScroll from "./FadeLinkScroll";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  responsiveDrawer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const history = useHistory();
  const pushAboutRoute = useCallback(() => {
    history.push("#about");
  }, [history]);

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#about"
    );
    pushAboutRoute();
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 24, right: 24 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

// TODO: add index
export default function PermanentDrawerLeft(props) {
  const theme = useTheme();
  const classes = useStyles();
  const renderLinks = () => {
    return (
      <>
        <FadeLink text="landing" link="/" />
        {props.refs.map((refObj, index) => {
          return <FadeLinkScroll {...refObj} />;
        })}
      </>
    );
  };

  return (
    <Fade in={true} timeout={300}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          className={classes.responsiveDrawer}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: theme.palette.action.hover,
              borderStyle: "none",
              boxSizing: "border-box",
              justifyContent: "center",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Slide in={true} appear={true} direction="down" timeout={500}>
            <Box sx={{ textAlign: "center" }}>
              <IconButton size="small" onClick={props.handleThemeChange}>
                {props.isDark ? (
                  <LightModeIcon fontSize="inherit" />
                ) : (
                  <DarkModeIcon fontSize="inherit" />
                )}
              </IconButton>
            </Box>
          </Slide>
          <Slide in={true} appear={true} direction="right" timeout={400}>
            <List style={{ textAlign: "center" }}>{renderLinks()}</List>
          </Slide>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          {props.children}
        </Box>
        <ScrollTop>
          <Fab color="primary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Fade>
  );
}
