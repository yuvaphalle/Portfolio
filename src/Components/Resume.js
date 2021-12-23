import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skillset</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
          <div>
          <img class="skillset" src="images/js.png" /> <img class="skillset" src="images/docker.png" /> <img class="skillset" src="images/android.png" /> <img class="skillset" src="images/html-5.png" />
          <img class="skillset" src="images/python.png" /> <img class="skillset" src="images/github.png" /> <img class="skillset" src="images/gitlab.png" /> <img class="skillset" src="images/drupal.png" />
          <img class="skillset" src="images/heroku.png" /> <img class="skillset" src="images/react.png" /> <img class="skillset" src="images/sql-server.png" /> <img class="skillset" src="images/php-code.png" />
          <img class="skillset" src="images/colab.png" /> <img class="skillset" src="images/node.png" /> <img class="skillset" src="images/auto.png" /> <img class="skillset" src="images/java.png" />    
          </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
