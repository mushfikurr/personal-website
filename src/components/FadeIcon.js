import { SvgIcon, Fade } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { React, useState } from "react";

function FadeIcon(props) {
  const [hovering, setHovering] = useState(props.default);
  const renderButton = (_) => {
    const transDelay =
      props.transitionDelay === undefined ? "0ms" : props.transitionDelay;
    return (
      <Fade in={true} timeout={500} style={{ transitionDelay: transDelay }}>
        <div
          onMouseEnter={() => {
            setHovering(true);
          }}
          onMouseLeave={() => {
            setHovering(false);
          }}
          onClick={() => {
            window.open(props.link, "_blank");
          }}
          style={{ cursor: "pointer" }}
        >
          {hovering && (
            <SvgIcon style={{ fontSize: "2rem" }}>
              <path d={props.iconPath} />
            </SvgIcon>
          )}
          {!hovering && (
            <SvgIcon style={{ fontSize: "2rem", color: grey[700] }}>
              <path d={props.iconPath} />
            </SvgIcon>
          )}
        </div>
      </Fade>
    );
  };

  return <>{renderButton()}</>;
}

export default FadeIcon;
