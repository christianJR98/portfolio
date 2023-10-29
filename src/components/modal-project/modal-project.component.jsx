import React from "react";

import Modal from "react-bootstrap/Modal";
import parse from "html-react-parser";

import "bootstrap/dist/css/bootstrap.min.css";

import "./modal-project.styles.scss";

const ModalProject = (props) => {
  const { showModal, closeModal } = props;
  const {
    project: { name, description, technologies, image, url_video, app, code },
  } = props;
  return (
    <Modal
      className="project-modal"
      show={showModal}
      onHide={closeModal}
      size="lg"
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="header-side-block"></div>
        <h2 className="text-center p-4 font-weight-bold">{name}</h2>
        <div className="header-side-block">
          <i
            className="fas fa-times fa-3x close-modal-button"
            onClick={closeModal}
          ></i>
        </div>
      </div>

      {url_video ? (
        <iframe
          width="100%"
          height="315"
          src={url_video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title={name}
        ></iframe>
      ) : (
        <img
          src={process.env.PUBLIC_URL + image}
          alt=""
          width="100%"
          heigth="315"
        />
      )}

      <div className="container pb-5">
        <h3 className="mt-4">Description</h3>
        <div className="description-modal">{parse(description)}</div>

        <h3 className="mt-4">Technologies</h3>
        <div className="d-flex mb-3">
          {technologies.map((tech) => {
            return (
              <div key={tech.id} className="m-2">
                {parse(tech.html)}
              </div>
            );
          })}
        </div>

        {code && (
          <a
            className="btn btn-info btn-lg px-4 mr-4 project_button"
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        )}

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
    </Modal>
  );
};

export default ModalProject;
