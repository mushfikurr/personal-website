import { Container, Grid, Slide, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRef } from "react";

export default function CenteredContent(props) {
  return (
    <Container fluid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={0}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography>
            <h1>
              <span style={{ color: grey[700] }}>#</span>
              <span> {props.title}</span>
            </h1>
          </Typography>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}
