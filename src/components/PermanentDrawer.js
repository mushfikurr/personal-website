import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import FadeLink from "./FadeLink";
import { grey } from "@mui/material/colors";
import FadeLinkScroll from "./FadeLinkScroll";
import { useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

const drawerWidth = 300;

// TODO: add index
export default function PermanentDrawerLeft(props) {
  const [isLoaded, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

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
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: grey[100],
              borderStyle: "none",
              boxSizing: "border-box",
              justifyContent: "center",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Slide in={true} appear={true} direction="right" timeout={250}>
            <List style={{ textAlign: "center" }}>{renderLinks()}</List>
          </Slide>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default" }}
        >
          {props.children}
        </Box>
      </Box>
    </Fade>
  );
}
