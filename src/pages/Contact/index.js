import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import './style.css';

function Contact() {

    return (

        <div>

            <Header />

            <main id="contact">

                <div>
                    <div className="row">
                        <p className="cnt"><i class="fas fa-cogs gear"></i> &nbsp; Contact Helen</p>
                    </div>
                </div>

                <section className="container">
                    
                    <div className="box">
                    
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="cnT">Old School</p>
                        <hr></hr>
                        </div>
                    </div>
                    
                    <br></br>
                    
                    <div className="row">
                        <div className="col-sm-4">
                            <p className="email"><i class="fas fa-envelope-square fa-2x em"></i> &nbsp; :<a className="link text-wrap text-break email" href="mailto:helenilindberg@yahoo.com">helenilindberg@yahoo.com</a></p>
                        </div>
                        <div className="col-sm-1">
                            <p className="break">  |  </p>
                        </div>
                        <div className="col-sm-2">
                            <p className="phone"><i class="fas fa-phone-square-alt fa-2x"></i>   &nbsp;   : &nbsp; (612) 707-0953</p>
                        </div>
                        <div className="col-sm-1">
                            <p className="break">  |  </p>
                        </div>
                        <div className="col-sm-2">
                            <p className="resume"><a className="link text-wrap text-break resume"><i class="fas fa-file fa-2x"></i></a>   &nbsp;   : &nbsp; Resume</p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    </div>
                
                    <br></br><br></br>
                    
                    <div className="box">
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="cnT">New School</p>
                            <hr className="br"></hr>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2">
                            <p className="ic"><a className="link" href="https://www.facebook.com/helenionelindberg"><i className="fab fa-facebook-square fa-4x"></i></a></p>
                        </div>
                        <div className="col-sm-1">
                        <p className="break">  |  </p>
                        </div>
                        <div className="col-sm-2">
                            <p><a className="link" href="https://www.linkedin.com/in/lindberghelen/"><i className="fab fa-linkedin fa-4x"></i></a></p>
                        </div>
                        <div className="col-sm-1">
                        <p className="break">  |  </p>
                        </div>
                        <div className="col-sm-2">
                            <p><a className="link" href="https://github.com/HelenIL"><i className="fab fa-github fa-4x"></i></a></p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    </div>
                
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;