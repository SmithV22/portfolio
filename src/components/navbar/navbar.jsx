
import React, { useState } from 'react' ;
import { BiHome, BiMessageDetail } from 'react-icons/bi' ;
import { SiAboutdotme } from 'react-icons/si' ;
import { MdOutlineComputer } from 'react-icons/md' ;
import { RiServiceLine } from 'react-icons/ri' ;
import { MdOutlineFolderSpecial } from 'react-icons/md' ;

import './navbar.css' ;

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#') ;
    return (
        <nav>
            <a href="#home" onClick={ () => setActiveNav('#home') } className={ activeNav === '#' ? 'active' : '' }><BiHome /></a>
            <a href="#about" onClick={ () => setActiveNav('#about') } className={ activeNav === '#about' ? 'active' : '' }><SiAboutdotme /></a>
            <a href="#experience" onClick={ () => setActiveNav('#experience') } className={ activeNav === '#experience' ? 'active' : '' }><MdOutlineComputer /></a>
            <a href="#services" onClick={ () => setActiveNav('#services') } className={ activeNav === '#services' ? 'active' : '' }><RiServiceLine /></a>
            <a href="#portfolio" onClick={ () => setActiveNav('#portfolio') } className={ activeNav === '#portfolio' ? 'active' : '' }><MdOutlineFolderSpecial /></a>
            <a href="#contact" onClick={ () => setActiveNav('#contact') } className={ activeNav === '#contact' ? 'active' : '' }><BiMessageDetail /></a>
        </nav>
    )
} ;

export default Navbar ;