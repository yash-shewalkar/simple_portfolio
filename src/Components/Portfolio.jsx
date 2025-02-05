/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ANPR System for Apartments",
    description:
      "Developed a real-time number plate detection system using Python, STREAMLIT, and OpenCV, featuring EASYOCR for character recognition and Firebase for data verification. Implemented a QR-code scanning feature for quick registration, achieving verification in under 2 seconds.",
    url: "https://github.com/yash-shewalkar/ANPR-System-for-Apartments",
  },
  {
    title: "Streaming-Summarizer",
    description:
      "Contributed to a full-stack web application that summarizes YouTube videos using Python, Flask, and React Enhanced the UI with a responsive design and live chat feature.",
    url: "https://github.com/yash-shewalkar/Streaming-Summarizer",
  },
  {
    title: "My image gallery",
    description:
      "Developed a full-stack image gallery application using NodeJS, Express, and MongoDB and Masonry layout.",
    url: "https://github.com/yash-shewalkar/my-image-gallery",
  },
  {
    title: "My Portfolio Website",
    description:
      "Built with Next.js and React.js, integrating NextAuth for secure Google authentication and NodeMailer for handling contact form submissions. Enhanced the UI with a floating dock featuring animated effects using Framer Motion and Aceternity UI.",
    url: "https://github.com/yash-shewalkar/My-Portfolio-Website",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
