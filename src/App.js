import LandingPage from "./sections/LandingPage";
import About from "./sections/About";
import Projects from "./sections/Projects";
import FunStuff from "./sections/Funstuff";
import PermanentDrawerLeft from "./components/PermanentDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, Route, useLocation } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "monospace"].join(","),
  },
});

function App() {
  const currentLocation = useLocation().pathname;
  const renderWithoutLanding = (_) => {
    return (
      <ThemeProvider theme={theme}>
        <PermanentDrawerLeft currentPage={currentLocation}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/funstuff">
              <FunStuff />
            </Route>
          </Switch>
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
