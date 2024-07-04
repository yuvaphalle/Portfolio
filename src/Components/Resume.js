import React, { useEffect, useRef } from "react";

const Resume = ({ data }) => {
  const slideshowRef = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (slideshowRef.current) {
      const slideshow = slideshowRef.current;

      // Clone slides to create an infinite loop effect
      const slides = Array.from(slideshow.children);
      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideshow.appendChild(clone);
      });

      const handleScroll = () => {
        if (slideshow.scrollLeft === 0) {
          slideshow.scrollLeft = slideshow.scrollWidth / 2;
        } else if (
          slideshow.scrollLeft >=
          slideshow.scrollWidth - slideshow.clientWidth
        ) {
          slideshow.scrollLeft = slideshow.scrollWidth / 2 - slideshow.clientWidth;
        }
      };

      slideshow.addEventListener("scroll", handleScroll);
      slideshow.scrollLeft = slideshow.scrollWidth / 2;

      return () => {
        slideshow.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (slideshowRef.current) {
      const slideshow = slideshowRef.current;
      slideshow.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (slideshowRef.current) {
      const slideshow = slideshowRef.current;
      slideshow.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

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
  }

  const skillImages = [
    "images/js.png",
    "images/docker.png",
    "images/android.png",
    "images/html-5.png",
    "images/python.png",
    "images/github.png",
    "images/gitlab.png",
    "images/drupal.png",
    "images/heroku.png",
    "images/react.png",
    "images/sql-server.png",
    "images/php-code.png",
    "images/colab.png",
    "images/node.png",
    "images/auto.png",
    "images/java.png",
    "images/flask.png",
    "images/django.png",
    "images/nextjs.png",
    "images/tailwind.png",
    "images/arduino.png",
    "images/jira.png",
    "images/crm.png",
    "images/azure.png",
    "images/unix.png",
  ];

  const slides = skillImages.map((src, index) => (
    <img key={index} className="skillset" src={src} alt="" />
  ));

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

          <div className="skill-slideshow-wrapper">
            <button className="slide-btn left" onClick={prevSlide}>
              &#10094;
            </button>
            <div className="skill-slideshow" ref={slideshowRef}>
              {slides}
            </div>
            <button className="slide-btn right" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
