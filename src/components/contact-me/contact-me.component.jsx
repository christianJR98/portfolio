import React, { useState } from "react";
// import * as emailjs from 'emailjs-com'
import { Modal, Button, Alert } from "react-bootstrap";

import { checkRequired, emailIsValid } from "../../utils/formUtils";
import Title from "../title/title.component";

import "./contact-me.styles.scss";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [show, setShow] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [textModal, setTextModal] = useState("");
  const [errorModal, setErrorModal] = useState(false);

  const showModal = () => setShow(true);

  const closeModal = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameTag = document.getElementById("name");
    const emailTag = document.getElementById("email");
    const subjectTag = document.getElementById("subject");
    const messageTag = document.getElementById("message");

    let existError = false;

    if (!checkRequired([nameTag, emailTag, subjectTag, messageTag])) {
      existError = true;
    }
    if (!emailIsValid(emailTag)) {
      existError = true;
    }
    if (existError) {
      return;
    }

    const emailInfo = {
      name,
      email,
      subject,
      message,
    };

    setButtonDisabled(true);

    console.log('Send email');

    // emailjs.send(serviceId,templateId, emailInfo, userId)
    //     .then((response) => {
    //         setErrorModal(false)
    //         setTitleModal('Success')
    //         setTextModal('Email sent')
    //         document.getElementById('contact-me-form').reset()
    //         showModal()
    //         setButtonDisabled(false)
    //     }, (err) => {
    //         setErrorModal(true)
    //         setTitleModal('Error')
    //         setTextModal('Email was not sent')
    //         showModal()
    //         setButtonDisabled(false)
    //     });
  };
  return (
    <section id="contact-me" className="contact-me pb-5">
      <div className="container">
        <Title text="contact me" textIsBlack={true} />

        <div className="row">
          <div className="col-lg-6">
            <form id="contact-me-form">
              <div className="form-group mb-4">
                {/*<label htmlFor="name">Name</label>*/}
                <input
                  className="form-control form-control-lg fields"
                  type="text"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <small>Error message</small>
              </div>
              <div className="form-group mb-4">
                {/*<label htmlFor="email">Email</label>*/}
                <input
                  className="form-control form-control-lg fields"
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <small>Error message</small>
              </div>

              <div className="form-group mb-4">
                {/*<label htmlFor="subject">Subject</label>*/}
                <input
                  className="form-control form-control-lg fields"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <small>Error message</small>
              </div>

              <div className="form-group mb-4">
                {/*<label htmlFor="">Message</label>*/}
                <textarea
                  className="form-control form-control-lg fields"
                  id="message"
                  cols="10"
                  rows="5"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <small>Error message</small>
              </div>

              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-info btn-lg px-5 rounded-pill send-button"
                  type="submit"
                  id="button-submit-contact"
                  onClick={handleSubmit}
                  disabled={buttonDisabled ? "disabled" : ""}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 letter-container d-none d-lg-flex">
            <img
              src={process.env.PUBLIC_URL + "/img/letter.svg"}
              alt="letter"
              className="img-letter"
            />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>
            <p className="modal-header-styles">{titleModal}</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Alert variant={errorModal ? "danger" : "success"}>
            <p className="modal-body-styles">{textModal}</p>
          </Alert>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="modal-button-styles"
            variant="secondary"
            onClick={closeModal}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ContactMe;
