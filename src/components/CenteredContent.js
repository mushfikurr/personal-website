import { Container, Grid } from "@mui/material";

export default function CenteredContent(props) {
  return (
    <Container fluid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={0}
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </Container>
  );
}
