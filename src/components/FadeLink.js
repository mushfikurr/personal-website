import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { React, useState, useEffect, useRef, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

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

function FadeLink(props) {
  const [hover, isHovering] = useHover();
  const history = useHistory();
  const handleOnClick = useCallback(() => {
    history.push(props.link);
  }, [history]);
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
      <div ref={hover} onClick={handleOnClick} style={{ cursor: "pointer" }}>
        {isHovering ? (
          <Typography style={{ fontSize: fontSize }}>> {props.text}</Typography>
        ) : (
          <Typography style={{ fontSize: fontSize, color: grey[600] }}>
            {props.text}
          </Typography>
        )}
      </div>
    );
  };

  return <>{renderDefaultButton()}</>;
}

export default FadeLink;
