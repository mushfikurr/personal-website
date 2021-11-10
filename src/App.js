import LandingPage from "./sections/LandingPage";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Hobbies } from "./sections/Hobbies";
import PermanentDrawerLeft from "./components/PermanentDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, Route, useLocation } from "react-router-dom";
import { useRef } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "monospace"].join(","),
  },
});

function App() {
  const currentLocation = useLocation().pathname;
  const location = useLocation();
  const refs = [
    {
      refTitle: "about me",
      link: "about",
      refLink: useRef(null),
    },
    {
      refTitle: "projects",
      link: "projects",
      refLink: useRef(null),
    },
    {
      refTitle: "hobbies",
      link: "hobbies",
      refLink: useRef(null),
    },
  ];

  const renderWithoutLanding = (_) => {
    return (
      <ThemeProvider theme={theme}>
        <Switch location={location}>
          <Route exact path="/main" render={{ location }}>
            <PermanentDrawerLeft refs={refs}>
              <About ref={refs[0].refLink} />
              <Projects ref={refs[1].refLink} />
              <Hobbies ref={refs[2].refLink} />
            </PermanentDrawerLeft>
          </Route>
        </Switch>
      </ThemeProvider>
    );
  };

  const renderRoutes = (_) => {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </ThemeProvider>
    );
  };

  return (
    <>
      {currentLocation !== "/" && renderWithoutLanding()}
      {currentLocation === "/" && renderRoutes()}
    </>
  );
}

export default App;
