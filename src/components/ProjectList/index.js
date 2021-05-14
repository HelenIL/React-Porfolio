import React from 'react';
import Project from '../ProjectTemplate/index';
import futurama from '../../assets/ProjectPics/futurama.png';
import blog from '../../assets/ProjectPics/tech_blog.png';
import employee from '../../assets/ProjectPics/em_db.png';
import travel from '../../assets/ProjectPics/TravelToday.png';
import directory from '../../assets/ProjectPics/empdir.png';


function ProjectList() {

    return (

        <section className="container">
            <Project 
            title="Futurama Quiz"
            pic={futurama}
            alt="futurama"
            description="A timed multiple choice quiz that puts your Futurama knowledge to the test! Save your high score so you can remember it always!"
            technologies="HTML, CSS, JavaScript"
            demo="https://helenil.github.io/Quiz/"
            repo="https://github.com/HelenIL/Quiz"
            />

            <Project
            title="Space Tech Talk"
            pic={blog}
            alt="Tech Blog"
            description="A full-stack blog site that allows the user to create an account, login, post a blog, edit/delete their blogs, comment on others' posts, and logout."
            technologies="Handlebars, CSS, Javascript, MySQL, Sequelize, Node.js, Express, Bycrypt, Bulma"
            demo="https://space-tech-talk.herokuapp.com/"
            repo="https://github.com/HelenIL/MVC-Tech-Blog"
            />
            <Project
            title="Employee Tracker"
            pic={employee}
            description="A command-line application for adding, deleting, and updating employees, roles, and departments."
            technologies="Node.js, MySQL, JavaScript, Inquirer, Chalk"
            demo="https://drive.google.com/file/d/1r6xvZWYEORiUDVRXEx745FsiQ4zVoBjP/view"
            repo="https://github.com/HelenIL/HW12-Employee-Tracker"
            />
            <Project 
            title="Travel Today"
            pic={travel}
            description="A group collaboration utilizing multiple APIs to deliver a dynamic, interactive travel search experience."
            technologies="HTML, CSS, JavaScript, jQuery, AJAX, Google Maps, Bootstrap"
            demo="https://litabeach.github.io/Travel-Today/"
            repo="https://github.com/Litabeach/Travel-Today"
            />
            <Project 
            title="Employee Directory"
            pic={directory}
            alt="Employee Directory"
            description="A React application for viewing employees in a directory. Search by name or sort names alphabetically."
            technologies="React, JavaScript, React-DOM, Axios, CSS, Bootstrap"
            demo="https://helenil.github.io/Reaction-Jackson/"
            repo="https://github.com/HelenIL/Reaction-Jackson"
            />

        </section>
    )
}

export default ProjectList;