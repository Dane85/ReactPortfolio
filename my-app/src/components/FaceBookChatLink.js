import * as React from "react";
import Fab from "@mui/material/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

function FaceBookChatLink() {
  const handleClick = () => {};

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: "fixed",
          bottom: 16,
          left: 16, // Adjust the right position
          zIndex: 10000, // Ensure the button stays above other elements
        }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <a href="https://m.me/dane.epicexpressions" className="socialIcon">
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
        </Fab>
      </div>
    </React.Fragment>
  );
}

export default FaceBookChatLink;
