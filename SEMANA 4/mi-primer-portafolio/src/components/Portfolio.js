import React from "react";
import '../styles/Portfolio.css';
import github from '../images/icons/github.svg'
import twitter from '../images/icons/twitter.svg'
import linkedin from '../images/icons/linkedin.svg'
import youtube from '../images/icons/youtube.svg'
import download from '../images/icons/Bottom Alignment.svg'

function Portfolio () {
    return (
        <div className="contenedor">
            <div className="profile">
                <div className="user-photo">
                    <img src={require('../images/logos/foto.jpg')} alt="" />
                </div>
                <div className="name">
                    <h1>Brayan Umpiri</h1>
                    <p className="profesion">
                        Super Junior Frontier
                    </p>
                    <div className="icons">
                        <img className="icon"
                            src={github} 
                            alt="" />
                        <img className="icon" 
                        src={twitter} 
                        alt="" />
                        <img className="icon" 
                        src={linkedin}
                        alt="" />
                        <img className="icon" 
                        src={youtube} 
                        alt="" />
                    </div>
                </div>
            </div>
            <div className="button1">
                <button className="download">
                    <p>Download CV</p> <img src={download} alt="" />
                </button>
                <button class="contact">
                    <p>Contact me</p>
                </button>
            </div>
            <div class="button2">
                    <div className="buttons">
                        <button class="portfolio">
                            Portfolio 
                        </button>
                        <button class="skills">
                            Skills
                        </button>
                    </div>
            </div>
            <div className="imagenes">
                    <section className="imagen">
                        
                    </section>
            </div>
        </div>
    );
}

export default Portfolio;