
import React from 'react' ;
import CV from '../../assets/neiaResume.pdf'

const cta = () => {
    return (
        <div className='cta'>
            <a href={ CV } download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Chat With Me</a>
        </div>
    )
}

export default cta ;