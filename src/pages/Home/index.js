import React from 'react';
import Header from '../../components/Header/index';
import About from '../../components/About/index';
import Footer from "../../components/Footer/index";
import './style.css';


function Home() {
    return (

        <div>

            <Header />

            <main className="main">
               
                <header id="back">
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-sm-7">
                        <p className="helen"><i class="fas fa-cogs gear"></i>  &nbsp; Helen Ione Lindberg</p>
                        </div>
                        <div className="col-lg-3 col-sm-5">
                            <img></img>
                        </div>
                    </div>
                </div>
                <About />


                
                </header>

            </main>
            <Footer />
        </div>
    )
}

export default Home;