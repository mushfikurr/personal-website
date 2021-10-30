import { SvgIcon } from "@mui/material";
import { grey } from "@mui/material/colors";
import { React, useState } from "react";

function FadeIcon(props) {
  const [hovering, setHovering] = useState(props.default);
  const renderButton = (_) => {
    return (
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
    );
  };

  return <>{renderButton()}</>;
}

export default FadeIcon;
