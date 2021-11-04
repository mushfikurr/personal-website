import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { React, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

export default function FadeLinkScroll(props) {
  const [hover, isHovering] = useHover();
  const currentLocation = useLocation().pathname;
  const fontSize = props.fontSize ? props.fontSize : "1rem";

  const renderDefaultButton = (_) => {
    if (currentLocation === props.link) {
      return (
        <Typography style={{ fontSize: fontSize, cursor: "pointer" }}>
          : {props.text}
        </Typography>
      );
    } else {
      return renderButton();
    }
  };

  const renderButton = (_) => {
    return (
      <div ref={hover} style={{ cursor: "pointer" }}>
        {isHovering ? (
          <a
            href={"#" + props.link}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography style={{ fontSize: fontSize }}>
              > {props.refTitle}
            </Typography>
          </a>
        ) : (
          <Typography style={{ fontSize: fontSize, color: grey[600] }}>
            {props.refTitle}
          </Typography>
        )}
      </div>
    );
  };

  return <>{renderDefaultButton()}</>;
}
