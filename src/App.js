import LandingPage from "./sections/LandingPage";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import PermanentDrawerLeft from "./components/PermanentDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, HashRouter, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRef } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "monospace"].join(","),
  },
});

function App() {
  const currentLocation = useLocation().pathname;
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
  ];

  const renderWithoutLanding = (_) => {
    return (
      <ThemeProvider theme={theme}>
        <PermanentDrawerLeft refs={refs}>
          <TransitionGroup>
            <CSSTransition timeout={250} classNames="fade">
              <Switch>
                <Route exact path="/main">
                  <About ref={refs[0].refLink} />
                  <Projects ref={refs[1].refLink} />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </PermanentDrawerLeft>
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
