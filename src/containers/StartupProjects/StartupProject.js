import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {Projects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const [selectedTag, setSelectedTag] = useState("ALL");

  if (!Projects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{Projects.title}</h1>
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "project-subtitle"
            }
          >
            {Projects.subtitle}
          </p>

          {/* Filter Buttons: */}
          <div className="filter-buttons">
            {["ALL", "Full Stack", "GenAI", "ML/DL", "DS"].map((tag, index) => (
              <button
                key={index}
                className={
                  selectedTag === tag ? "filter-button active" : "filter-button"
                }
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="projects-container">
            {Projects.projects
              .filter(project =>
                selectedTag === "ALL"
                  ? true
                  : project.tags.includes(selectedTag)
              )
              .map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="project-card-image"
                        />
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h3
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h3>
                      {project.projectDesc.map((desc, i) => (
                        <p
                          key={i}
                          className={
                            isDark
                              ? "dark-mode project-card-subtitle"
                              : "project-card-subtitle"
                          }
                        >
                          {desc}
                        </p>
                      ))}
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => (
                            <span
                              key={i}
                              className="project-tag"
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
