
import React from 'react' ;
import { BsPatchCheck } from 'react-icons/bs' ;

import './services.css' ;

const Services = () => {

    return (
        <section id='services'>
            <h5>Full Stack</h5>
            <h2>Languages</h2>
            <div className=" container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>MERN</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>React</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>Express</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>MongoDB</p>
                        </li>
                        
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Java</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>Java</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>Spring Boot</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>MySql</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>Bootstrap - MUI</p>
                        </li>
                        
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Python</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>Python</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>MySQL</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>Flask</p>
                        </li>
                        <li>
                            <BsPatchCheck className='service__list-icon'/>
                            <p>AJAX</p>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services ;