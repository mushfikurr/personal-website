import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import FadeLink from "./FadeLink";
import FadeLinkContainer from "./FadeLinkContainer";
import { grey } from "@mui/material/colors";
import FadeLinkScroll from "./FadeLinkScroll";

const drawerWidth = 300;

// TODO: add index
export default function PermanentDrawerLeft(props) {
  const renderLinks = () => {
    return (
      <>
        {props.refs.map((refObj, index) => {
          return <FadeLinkScroll {...refObj} />;
        })}
      </>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: grey[100],
            justifyContent: "center",
            borderStyle: "none",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List style={{ textAlign: "center" }}>{renderLinks()}</List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        {props.children}
      </Box>
    </Box>
  );
}
