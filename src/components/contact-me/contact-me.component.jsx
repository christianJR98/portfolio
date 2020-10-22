import React from 'react';

import Title from '../title/title.component';

import './contact-me.styles.scss';

const ContactMe = () =>{
    return (
        <section id="contact-me" className="contact-me pb-5">
             <div className="container">
                <Title
                    text="contact me"
                    textIsBlack={true}
                />

                <div className="row">
                    <div className="col-lg-6">
                        <form >
                            <div className="form-group mb-4">
                                {/*<label htmlFor="name">Name</label>*/}
                                <input className="form-control form-control-lg" type="text" id="name" placeholder="Name" required/>
                            </div>
                            <div className="form-group mb-4">
                                {/*<label htmlFor="email">Email</label>*/}
                                <input className="form-control form-control-lg" type="email" id="email" placeholder="Email" required/>
                            </div>

                            <div className="form-group mb-4">
                                {/*<label htmlFor="subject">Subject</label>*/}
                                <input className="form-control form-control-lg" type="text" id="subject" placeholder="Subject" required/>
                            </div>

                            <div className="form-group mb-4">
                                {/*<label htmlFor="">Message</label>*/}
                                <textarea className="form-control form-control-lg" id="message" cols="10" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-info btn-lg px-5 rounded-pill" type="submit">Send</button>
                            </div>
                            

                        </form>
                    </div>
                    <div className="col-lg-6 letter-container d-none d-lg-flex">
                        <img src={process.env.PUBLIC_URL + '/img/letter.svg'} alt="letter" className="img-letter"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;