import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardActions,
  Fade,
  Grid,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useOnScreen } from "./Utils";
import { useRef } from "react";

const projectList = [
  {
    title: "Smart Light Interface",
    builtUsing: ["javascript", "react", "html/css", "material-ui", "electron"],
    projectDescription:
      "An interface created to interact with Govee smart lights using Govee's API.",
    link: "https://github.com/mushfikurr/govee-controller",
  },
  {
    title: "Educational Social Media",
    builtUsing: [
      "python",
      "flask",
      "ui-kit",
      "javascript",
      "jquery",
      "sql",
      "html/css",
    ],
    projectDescription:
      "A fully functional social media oriented towards education.",
    link: "https://github.com/mushfikurr/edu-social-media",
  },
  {
    title: "Personal Website",
    builtUsing: ["react", "javascript", "material-ui"],
    projectDescription:
      "A hub for my projects, professional experience and personal hobbies.",
    link: "https://github.com/mushfikurr/personal-website",
  },
  {
    title: "Fortnite Discord Bot",
    builtUsing: ["python", "discord-py", "requests"],
    projectDescription:
      "A chatbot used in popular chat application Discord, to retrieve statistics from an API for Fortnite.",
    link: "https://github.com/mushfikurr/fortnite-discord-bot",
  },
];

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: "flex",
    flexDirection: "column",
  },
  cardActions: {
    marginTop: "auto",
  },
}));

function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.cardRoot} style={{ height: "100%" }}>
      <CardHeader
        title={
          <Typography style={{ fontSize: "20px" }}>{props.title}</Typography>
        }
        subheader={
          <Typography color="text.secondary">
            <small>🔨 {props.builtUsing.join(", ")}</small>
          </Typography>
        }
      />
      <CardContent style={{ marginTop: "-20px" }}>
        <p style={{ fontSize: "14px" }}>{props.projectDescription}</p>
      </CardContent>
      <div style={{ flexGrow: 1 }} />
      <CardActions style={{ marginTop: "-30px" }}>
        <Button
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        >
          open project
        </Button>
      </CardActions>
    </Card>
  );
}

export default function ProjectContainer(props) {
  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {projectList.map((project, index) => {
        return (
          <Fade
            in={props.onScreen}
            style={{ transitionDelay: ((80 * index) ^ 2) + 50 + "ms" }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard {...project} />
            </Grid>
          </Fade>
        );
      })}
    </Grid>
  );
}
