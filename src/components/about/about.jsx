
import React from 'react' ;
import { FaAward } from 'react-icons/fa' ;
import { FiUsers } from 'react-icons/fi' ;
import { AiOutlineFileSync } from 'react-icons/ai' ;


import './about.css' ;
import AboutMe from '../../assets/me3.png' ;

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ AboutMe } alt="profile pic" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>New To Field</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Something here</small>
                        </article>
                        <article className='about__card'>
                            <AiOutlineFileSync className='about__icon' />
                            <h5>Projects</h5>
                            <small>Number of projects</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit laboriosam nesciunt accusamus mollitia, dolores quae libero totam ducimus. Porro velit voluptas commodi a magnam at dicta consectetur aliquam in?</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
} ;

export default About ;