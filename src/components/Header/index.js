import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import './style.css';


function Header() {

    const location = useLocation();

    return (

        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand img-fluid" hfre="https://github.com/HelenIL"><span className="h">Helen</span><span className="i">Ione</span><span className="l">Lindberg</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                           <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link" }>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className={location.pathname === "/skills" ? "nav-link active" : "nav-link"}>
                                Skills
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>




    )
}

export default Header;