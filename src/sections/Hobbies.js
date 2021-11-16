import { forwardRef, useState, useEffect } from "react";
import CenteredContent from "../components/CenteredContent";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useHistory } from "react-router";
import { useOnScreen } from "../components/Utils";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link style={{ cursor: "pointer" }} onClick={handleClickOpen}>
        (i have some snippets here)
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"some work in progress songs.."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            KAMIL <br />
            <iframe
              src="https://dbree.org/e/75d9c7"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              width="100%"
              height="40px"
            ></iframe>
            <br />
            SALT
            <iframe
              src="https://dbree.org/e/aa0584"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              width="100%"
              height="40px"
            ></iframe>
            <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const Hobbies = forwardRef((props, ref) => {
  const history = useHistory();
  const onScreen = useOnScreen(ref, "-100px");

  useEffect(() => {
    if (onScreen) {
      history.push("#hobbies");
    }
  }, [onScreen]);

  return (
    <>
      <div id="hobbies" ref={ref}>
        <CenteredContent title="hobbies">
          <p>
            <strong style={{ color: grey[700] }}>music ></strong> I like to
            produce (and listen) to a lot of music.
            <AlertDialog />
            <p>
              <strong style={{ color: grey[700] }}>video editing ></strong> I
              enjoy using software such as{" "}
              <a href="https://www.adobe.com/uk/products/aftereffects.html">
                Adobe After Effects
              </a>{" "}
              to create motion graphics, and edit together collages of footage
              for my friends and family.
            </p>
            <p>
              <strong style={{ color: grey[700] }}>fitness ></strong> It
              improves every area of my life. I regularly go to the gym, aiming
              to get stronger every week. I also enjoying playing badminton and
              football.
            </p>
          </p>
        </CenteredContent>
      </div>
    </>
  );
});
