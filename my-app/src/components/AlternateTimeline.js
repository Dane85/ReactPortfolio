import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function AlternateTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="The Sky Is The Limit"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">The Future</h3>
        <p>
          I am currently immersed in the dynamic field of networks and ethical
          hacking, actively learning the intricacies of cybersecurity. My
          educational background has equipped me with a solid foundation in
          computer architecture, processes, networks, and the Internet of Things
          (IoT). With a passion for securing digital landscapes, my ultimate
          goal is to work as a cybersecurity engineer, specializing in ethical
          hacking.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2022-Present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Jonas Club Software</h3>
        <p>
          My focus revolves around designing, developing, and debugging
          front-end websites and architectural layouts using Kentico systems. My
          toolkit includes HTML, CSS, JS, Bootstrap, jQuery, WordPress, Python,
          and SQL. My Professional Experience at Jonas Club Software: I take
          pride in collaborating with a talented team, working hand-in-hand with
          designers and team leaders to address client issues and deliver
          top-notch solutions. Juggling multiple projects simultaneously, I've
          honed my skills in improving processes and productivity through the
          strategic use of Salesforce and Excel spreadsheets along with so many
          other tools.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2021"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">Epic Expressions</h3>
        <p>
          In 2021, I decided to start my own journey on the internet. I created
          Epic Expressions Multimedia Solutions, a company aimed at not only
          enhancing my skills with IoT but also assisting others, including
          small businesses, in achieving their goals. This venture provided me
          with excellent exposure, enabling me to learn not only a plethora of
          new technologies but also the soft skills required when working with
          clients.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Athabasca University
        </h3>
        <p>
          As I step into the realm of computer science, my academic journey
          takes a deliberate focus on cybersecurity—a strategic exploration of
          the digital frontier. I begin with the essentials of programming and
          logic, laying the groundwork for a deeper understanding of computer
          systems, algorithms, and data management.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Web Development Boot Camp
        </h3>
        <p>
          In the realm of web development, I am dedicated to shaping exceptional
          digital encounters. Armed with a keen sense of design aesthetics and a
          profound understanding of user-centric philosophies, I embark on a
          mission to construct user-friendly online platforms that effortlessly
          blend style and utility. My goal is to leave a lasting impact,
          ensuring users enjoy a seamless and engaging journey with the digital
          solutions I bring to life.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">The Railway</h3>
        <p>
          In 2020, I left the railway after being a rail car mechanic for 8
          years. During this time, I had a lot of decision-making to do.
          Finally, after some research and interest in technology, I bought my
          first boot camp in web development.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
