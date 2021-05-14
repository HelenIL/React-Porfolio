import React from "react";
import Header from '../../components/Header/index';
import Footer from "../../components/Footer/index";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/CSS.png";
import js from "../../assets/icons/js.png";
import ajax from "../../assets/icons/AJAX.png";
import jquery from "../../assets/icons/jquery.png";
import git from "../../assets/icons/git.png";
import node from "../../assets/icons/node.png";
import express from "../../assets/icons/express.png";
import vscode from "../../assets/icons/vscode.png";
import mongodb from "../../assets/icons/mongodb.png";
import mysql from "../../assets/icons/mysql.png";
import react from "../../assets/icons/react.png";
import "./style.css";

function Skills() {

    return (
        
        <div> 
            <Header />
<main>
    <header id="skills">
        <section>
            <div className="container">
                <p className="acq"><i class="fas fa-cogs gear"></i>  &nbsp;Acquired Skill Set</p>
                <div className="skBox">
                
                <div className="row skIcons">
                    <div className="col-sm-3 left">
                <img className="img img-thumbnail img-fluid icon" src={html}
							alt="html"></img>
						<p className="p">HTML5</p>
                        </div>
                        <div className="col-sm-3 left">
                <img className="img img-thumbnail img-fluid icon" src={css}
							alt="css"></img>
						<p className="p">CSS</p>
                        </div>
                        <div className="col-sm-3 right">
                <img className="img img-thumbnail img-fluid icon" src={js}
							alt="js"></img>
						<p className="p">JavaScript/ES6</p>
                        </div>
                        <div className="col-sm-3 right">
                <img className="img img-thumbnail img-fluid icon" src={ajax}
							alt="ajax"></img>
						<p className="p">AJAX/Axios</p>
                        </div>
                        </div>
                    
                    
                    <div className="row skIcons">
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={jquery}
							alt="jquery"></img>
						<p className="p">jQuery</p>
                        </div>
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={git}
							alt="git"></img>
						<p className="p">Git</p>
                        </div>
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={node}
							alt="node"></img>
						<p className="p">Node.js</p>
                        </div>
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={express}
							alt="express"></img>
						<p className="p">Express</p>
                        </div>
                        </div>
                    
                    <div className="row skIcons">
                            <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={vscode}
							alt="vscode"></img>
						<p className="p">Visual Studio Code</p>
                        </div>
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={mongodb}
							alt="mongodb"></img>
						<p className="p">MongoDB</p>
                        </div>
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={mysql}
							alt="mysql"></img>
						<p className="p">MySQL</p>
                        </div>
                        <div className="col-sm-3">
                <img className="img img-thumbnail img-fluid icon" src={react}
							alt="react"></img>
						<p className="p">React</p>
                        </div>  
                    </div>     
                    </div>
            </div>
            
        </section>
        </header>
        </main>
        <Footer />
        </div>
    )
}

export default Skills;