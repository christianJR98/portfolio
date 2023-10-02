import React from "react";
import parse from "html-react-parser";

import "./project.styles.scss";

const Project = (props) => {
  const { id, name, image, technologies, app, code } = props;

  return (
    <div className="card-project">
      <div className="card-project__header">
        <h3 className="text-center header_text">{name}</h3>
      </div>

      <img
        id={id}
        className="card-project--img"
        src={process.env.PUBLIC_URL + image}
        alt=""
        onClick={props.getIdProjectAndShowModal}
      />

      <div className="technologies-container d-flex p-2 justify-content-center">
        {technologies.map((tech) => {
          return (
            <div key={tech.id} className="m-2">
              {parse(tech.html)}
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-around py-3 buttons-container">
        {code && (
          <a
            className="btn btn-info btn-lg px-4 project_button"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        )}

        <button
          className="btn btn-info btn-lg px-4 project_button"
          id={id}
          onClick={props.getIdProjectAndShowModal}
        >
          Details
        </button>

        {app && (
          <a
            className="btn btn-info btn-lg px-4 project_button"
            href={app}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
