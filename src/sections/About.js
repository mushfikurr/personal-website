import { Typography, Container, Chip } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function About(props) {
  return (
    <>
      <Container fluid>
        <Typography>
          <h1>
            <span style={{ color: grey[700] }}>#</span>
            <span> about me</span>
          </h1>
        </Typography>
        <p>
          Hello! My name is Mushfikur. I am an undergraduate Computer Science at{" "}
          <a href="https://city.ac.uk" target="_blank">
            City, University of London
          </a>
          .<br />
          My first introduction to programming was at Age 12, making
          modifications to a popular sandbox game Minecraft, which was
          programmed primarily in Java at the time.
          <br />
          Hacking my way through, my interest grew - which led to me enrolling
          in a Computer Science, BSc degree.
          <br />
          I believe I can attribute my success in this degree (predicted
          First-class) to my undying passion learning new things.
          <br />
          Below are technologies that I have learnt over the years:
        </p>
        {[
          "python",
          "javascript",
          "java",
          "haskell",
          "c++",
          "flask & django",
          "react",
          "html/css",
          "consuming/designing api",
        ].map((skill, index) => {
          return (
            <Chip
              sx={{ marginLeft: "10px", marginBottom: "10px" }}
              label={skill}
              key={index}
              variant="outlined"
            />
          );
        })}
        <Typography>
          <h1>
            <span style={{ color: grey[700] }}>#</span>
            <span> projects</span>
          </h1>
        </Typography>
        
      </Container>
    </>
  );
}
