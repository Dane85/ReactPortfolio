import React from "react";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPython,
  faReact,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faFigma,
  faGit,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const MarqueeComponent = () => (
  <Marquee speed={100}>
    <FontAwesomeIcon className="marqueeIcon" icon={faGithub} />
    <FontAwesomeIcon className="marqueeIcon" icon={faPython} />
    <FontAwesomeIcon className="marqueeIcon" icon={faReact} />
    <FontAwesomeIcon className="marqueeIcon" icon={faHtml5} />
    <FontAwesomeIcon className="marqueeIcon" icon={faCss3Alt} />
    <FontAwesomeIcon className="marqueeIcon" icon={faSquareJs} />
    <FontAwesomeIcon className="marqueeIcon" icon={faFigma} />
    <FontAwesomeIcon className="marqueeIcon" icon={faGit} />
    <FontAwesomeIcon className="marqueeIcon" icon={faWordpress} />
  </Marquee>
);

export default MarqueeComponent;
