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
  faSlack,
  faGoogle,
  faWindows,
  faStackOverflow,
  faLinux,
  faNode,
  faElementor,
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
    <FontAwesomeIcon className="marqueeIcon" icon={faSlack} />
    <FontAwesomeIcon className="marqueeIcon" icon={faLinux} />
    <FontAwesomeIcon className="marqueeIcon" icon={faWordpress} />
    <FontAwesomeIcon className="marqueeIcon" icon={faGoogle} />
    <FontAwesomeIcon className="marqueeIcon" icon={faWindows} />
    <FontAwesomeIcon className="marqueeIcon" icon={faStackOverflow} />
    <FontAwesomeIcon className="marqueeIcon" icon={faNode} />
    <FontAwesomeIcon className="marqueeIcon" icon={faElementor} />
  </Marquee>
);

export default MarqueeComponent;
