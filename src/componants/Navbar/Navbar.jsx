import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.png'
import { Link, Element } from 'react-scroll';

function Navbar() {

  const [sticky, setsticky] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll' , ()=>{
      window.scrollY > 170 ? setsticky(true) : setsticky(false)
    })
  })

  return <div className={`navbar ${sticky? "dark" : ""} `}>
    
    <img className=" h-10 " src={logo} alt="" />

    <ul className="flex gap-10  " >
        <li><Link to="hero" smooth={true} offset={-200} duration={500}>Home</Link></li>
        <li><Link to="pgm_img_sec" smooth={true} offset={-200} duration={500}>Program</Link></li>
        <li><Link to="about_main" smooth={true} offset={-200} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-200} duration={500}>Campus</Link></li>
        <li><Link to="container_main" smooth={true} offset={-200} duration={500}>Tastimonials</Link></li>
        <li><Link to="contact_boss" smooth={true} offset={-200} duration={500}><button className="btn" >Contact us</button></Link></li>
        
    </ul>
    
  </div>
  ;
}

export default Navbar;
