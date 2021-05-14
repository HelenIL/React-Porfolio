import React from 'react';
import './style.css';

function Footer() {

    return (
        <footer className="p-0 mb-0 bg-white text-dark fixed-bottom">
			<div className="footer-copyright pr-3 py-3 footDiv">
				<p className="foot">Helen Ione Lindberg | &copy; 2021
			
				<a href="https://www.facebook.com/helenionelindberg" target="_blank" rel="noreferrer"
					className="social" title="Facebook"><i className="fa fa-facebook-f fa-1x"></i></a>
					
				<a href="https://www.linkedin.com/in/lindberghelen/" target="_blank" rel="noreferrer"
					className="social" title="LinkedIn"><i className="fa fa-linkedin fa-1x"></i></a>
					
				<a href="https://github.com/HelenIL" target="_blank" rel="noreferrer" className="social" title="GitHub"><i
					className="fa fa-github fa-1x"></i></a>

				</p>
			</div>
		</footer>
    )
}

export default Footer;