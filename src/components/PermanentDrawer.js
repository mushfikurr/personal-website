import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import FadeLink from "./FadeLink";
import FadeLinkContainer from "./FadeLinkContainer";
import { grey } from "@mui/material/colors";

const drawerWidth = 300;
const links = [
  { text: "landing", link: "/" },
  { text: "about me", link: "/about" },
  { text: "projects", link: "/projects" },
  { text: "fun stuff", link: "/funstuff" },
];

// TODO: add index
export default function PermanentDrawerLeft(props) {
  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <FadeLink fontSize={"1.05rem"} text={link.text} link={link.link} />
      );
    });
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
      <Box
        component="main"
        textAlign="center"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
