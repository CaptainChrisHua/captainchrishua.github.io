import React, {useContext} from "react";
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
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {Projects.subtitle}
          </p>

          <div className="projects-container">
            {Projects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-row project-row-dark"
                      : "project-row project-row-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image-vertical">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-img"
                      />
                    </div>
                  ) : null}
                  <div className="project-text-vertical">
                    <h3 className="project-title">{project.projectName}</h3>
                    <p className="project-desc">{project.projectDesc}</p>
                    {project.footerLink ? (
                      <div className="project-links">
                        {project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className="project-button"
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
