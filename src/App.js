import LandingPage from "./sections/LandingPage";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Hobbies } from "./sections/Hobbies";
import PermanentDrawerLeft from "./components/PermanentDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
    typography: {
      fontFamily: ["Roboto Mono", "monospace"].join(","),
    },
  });

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

  const handleThemeChange = (_) => {
    setDark(!dark);
  };

  const renderWithoutLanding = (_) => {
    return (
      <ThemeProvider theme={theme}>
        <Switch location={location}>
          <Route exact path="/main" render={{ location }}>
            <PermanentDrawerLeft
              handleThemeChange={handleThemeChange}
              isDark={dark}
              refs={refs}
            >
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
