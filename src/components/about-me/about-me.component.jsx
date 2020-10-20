import React from 'react';

import './about-me.styles.scss';

const AboutMe = () =>{
    return (
        <section id="about-me" className="about-me">
            <div className="container pb-5 pt-3">
                <h2 className="display-3 text-center text-capitalize pb-3"><strong>About me</strong></h2>

                <div className="row">
                    <div className="col-md-6">
                        <img className="about-me--img" src={process.env.PUBLIC_URL + '/img/developer.jpg'} alt="chess" />
                    </div>
                    <div className=" col-md-6">
                        <p className="text-justify parragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magnam, aperiam vero nesciunt nisi hic voluptatem! Unde neque repellendus corrupti repellat, ab omnis molestias error rem itaque temporibus et ullam voluptate dolores labore sequi ea vitae adipisci eveniet itaque temporibus et ullam voluptate dolores labore sequi ea vitae adipisci eveniet. 
                        </p>
                        <p className="text-justify parragraph">
                            I'm christian Jacobo besides programming I love to play chess, video games and play guitar.  ab omnis molestias error rem itaque temporibus et ullam voluptate dolores labore sequi ea vitae adipisci eveniet itaque.
                        </p>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe;