import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Fade in={isVisible}>
        <div
          onClick={handleClick}
          role="presentation"
          style={{
            position: "fixed",
            bottom: 16,
            right: 16, // Adjust the right position
            zIndex: 10000, // Ensure the button stays above other elements
          }}
        >
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Fade>
    </React.Fragment>
  );
}

export default ScrollTop;
