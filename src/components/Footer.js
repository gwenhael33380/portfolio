import React from "react";
import { NavLink } from "react-router-dom";



const Footer = () => {
    const footer = () => {

    
    const arrow = document.querySelector(".content_arrow");
    const footer = document.querySelector(".footer");
    const content = document.querySelector(".content");
 
     arrow.addEventListener("mouseover", () => {
        footer.classList.toggle("active_footer");
        console.log(arrow);

   
    content.addEventListener("click", () => {
        footer.classList.remove("active_footer");
        });
    });

    }
    return (
        <footer className="footer" >
            <div 
            className="content_arrow"
            onMouseOver={footer}
            >
            <i id="arrow" className="fa-solid fa-chevron-up param_arrow arrow"></i>
            </div>
            <ul>
            <NavLink
                to="/Mentions-legales">
                <li className="color_legal_motion">Mentions légales</li>   
            </NavLink>
   
                
            </ul>
        <p className="copyright_content">Copyright © 2022 Dev-Events, Inc</p>
        </footer>

    );
};

export default Footer;