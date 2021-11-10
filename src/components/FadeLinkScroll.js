import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { React, useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";

function useHover(value, setValue) {
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
  const [hoverValue, setHoverValue] = useState(false);
  const [hover, isHovering] = useHover(hoverValue, setHoverValue);
  const currentLocation = useLocation().hash;
  const fontSize = props.fontSize ? props.fontSize : "1rem";
  const hashLink = "#" + props.link;
  const resetHover = (_) => {
    setHoverValue(false);
  };

  const renderSelectedButton = (_) => {
    if (currentLocation === hashLink) {
      if (isHovering) resetHover();
      return (
        <Typography style={{ fontSize: fontSize, cursor: "pointer" }}>
          : {props.refTitle}
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
            href={hashLink}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography style={{ fontSize: fontSize }}>
              > {props.refTitle}
            </Typography>
          </a>
        ) : (
          <a
            href={hashLink}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography style={{ fontSize: fontSize, color: grey[600] }}>
              {props.refTitle}
            </Typography>
          </a>
        )}
      </div>
    );
  };

  return <>{renderSelectedButton()}</>;
}
