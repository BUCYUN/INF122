import React from "react";
import '../styles/Portfolio.css';
import github from '../images/icons/github.svg'
import twitter from '../images/icons/twitter.svg'
import linkedin from '../images/icons/linkedin.svg'
import youtube from '../images/icons/youtube.svg'
import download from '../images/icons/Bottom Alignment.svg'
import facebook from '../images/icons/facebook.svg'

function Portfolio () {
    return (
        <div className="contenedor">
            <div className="profile">
                <div className="user-photo">
                    <img src={require('../images/logos/foto1.jpg')} alt="" />
                </div>
                <div className="name">
                    <h1>Brayan Umpiri</h1>
                    <p className="profesion">
                        Super Junior Frontier
                    </p>
                    <div className="icons">
                        <a href="https://github.com/BUCYUN">
                            <img className="icon"
                            src={github} 
                            alt="" />
                        </a>
                        <a href="">
                            <img className="icon" 
                            src={twitter} 
                            alt="" />
                        </a>
                        <a href="">
                            <img className="icon" 
                            src={facebook}
                            alt="" />
                        </a>
                        <a href="">
                            <img className="icon" 
                            src={youtube} 
                            alt="" />
                        </a>
                        
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
                        <button>
                            <img src={require('../images/logos/Proyecto 1.png')} alt="" />
                        </button>
                    </section>
            </div>
        </div>
    );
}

export default Portfolio;