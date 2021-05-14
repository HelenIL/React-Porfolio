import React from 'react';
import './style.css';

function Project(props) {

    return (

        
        <section className="space black">
            <div className="content text-wrap">
            <div>
                        <header>
                            <p className="projT">{props.title}</p>
                        </header>
                        <br></br>
                        <img src={props.pic} className="img-fluid portPic" alt={props.alt}  />
                        <br></br>
                        <br></br>
                        <p className="des">{props.description}</p>
                        <br></br>
                        <p className="tech"><b>Technologies Rocked: &nbsp;</b>  {props.technologies}</p>
                        <br></br>
                        <div className="bdiv">
                        <a className="link" href={props.repo}
                            target="_blank" rel="noreferrer"><button className="btn">See the Code</button></a>
                        <a className="link"
                            href={props.demo} target="_blank" rel="noreferrer"><button className="btn">Check Out the Site</button></a>
                        </div>
                    </div>
            </div>
        </section>
     
    )
}


export default Project;