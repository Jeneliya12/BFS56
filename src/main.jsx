import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <html>
      <head>
        <title>My Portfolio</title>
      </head>
      <body>
        <header>
          <h1>Jeneliya Gurung</h1>
          <p>Full Stack Web Developer</p>
        </header>
        <main>
          <section className="aboutme">
            <h2>About Me</h2>
            <p>
              Hi, I am Jeneliya Gurung. I am a recent graduate in masters of
              computer science from Monroe College, NYC.
            </p>
          </section>
          <section className="projects">
            <h2>Projects</h2>
            <div className="projectone">
              <h3>Auction System</h3>
              <p>
                he most common type, where participants place increasingly
                higher bids. The auction ends when no more bids are placed.
              </p>
            </div>
            <div className="projecttwo">
              <h3>Budget Allocation</h3>
              <p>
                Budget allocation is the process of distributing financial
                resources among various departments, projects, or activities to
                achieve specific goals and objectives.
              </p>
            </div>
            <div className="projectthree">
              <h3>Tax Calculator</h3>
              <p>
                A tax calculator is a tool that helps individuals or businesses
                estimate their tax liabilities based on various inputs such as
                income, deductions, and applicable tax rates.
              </p>
            </div>
          </section>
          <section className="contact">
            <h2>Contact</h2>
            <p>Email: "gurungjeneliya@gmail.com"</p>
          </section>
        </main>
      </body>
    </html>
  </React.StrictMode>
);
