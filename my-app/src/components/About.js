import React from "react";

function About() {
  // make about Link disappear when user clicks on it
  //   const aboutLink = document.querySelector(".nav-links-about");
  //   aboutLink.style.display = "none";

  //   make about link appear again when user clicks on home button
  //   const homeLink = document.querySelector(".nav-links-home");
  //   homeLink.addEventListener("click", () => {
  //     aboutLink.style.display = "block";
  //   });

  return (
    <main className="about-container">
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

export default About;
