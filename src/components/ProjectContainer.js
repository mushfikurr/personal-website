import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  CardActions,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const projectList = [
  {
    title: "Smart Light Interface",
    img: "https://picsum.photos/200/300?random=" + Math.random() * 10,
    imgAlt: "Image",
    builtUsing: ["javascript", "react", "html/css", "material-ui", "electron"],
    projectDescription:
      "An interface created to interact with Govee smart lights using Govee's API.",
  },
  {
    title: "Lore",
    img: "https://picsum.photos/200/300?random=" + Math.random() * 10,
    imgAlt: "Image",
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
  },
  {
    title: "Personal Website",
    img: "https://picsum.photos/200/300?random=" + Math.random() * 10,
    imgAlt: "Image",
    builtUsing: ["react", "javascript", "material-ui"],
    projectDescription:
      "A hub for my projects, professional experience and personal hobbies.",
  },
  {
    title: "Raptor: Discord Bot",
    img: "https://picsum.photos/200/300?random=" + Math.random() * 10,
    imgAlt: "Image",
    builtUsing: ["python", "discord-py", "requests"],
    projectDescription:
      "A chatbot used in popular chat application Discord, to retrieve statistics from an API for Fortnite.",
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
      {/* <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt={props.img}
      /> */}
      <CardContent style={{ marginTop: "-20px" }}>
        <p style={{ fontSize: "14px" }}>{props.projectDescription}</p>
      </CardContent>
      <div style={{ flexGrow: 1 }} />
      <CardActions style={{ marginTop: "-30px" }}>
        <Button>open project</Button>
      </CardActions>
    </Card>
  );
}

export default function ProjectContainer(props) {
  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {projectList.map((project) => {
        return (
          <Grid item xs={4}>
            <ProjectCard {...project} />
          </Grid>
        );
      })}
    </Grid>
  );
}
