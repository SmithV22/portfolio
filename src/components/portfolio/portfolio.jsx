
import React from 'react' ;
import './portfolio.css' ;
import World from '../../assets/world.png' ;
import Programming from '../../assets/programming.png' ;
import People from '../../assets/people.png' ;
import Languages from '../../assets/languages.png' ;
import  Button from '../../assets/buttons.png' ;
import Doodle from '../../assets/doodle.png' ;

const Portfolio = () => {
    const data = [
        {
            id: 1,
            image: People,
            title: 'Coming Soon',
            github: 'https://github.com/smithv22/soloproject',
            demo: 'www.neiasoftwaredesign.com'
        },
        {
            id: 2,
            image: Programming,
            title: 'Coming Soon',
            github: 'https://github.com/smithv22/soloproject',
            demo: 'www.neiasoftwaredesign.com'
        },
        {
            id: 3,
            image: Button,
            title: 'Coming Soon',
            github: 'https://github.com/smithv22/soloproject',
            demo: 'www.neiasoftwaredesign.com'
        },
        {
            id: 4,
            image: World,
            title: 'Coming Soon',
            github: 'https://github.com/smithv22/soloproject',
            demo: 'www.neiasoftwaredesign.com'
        },
        {
            id: 5,
            image: Doodle,
            title: 'Coming Soon',
            github: 'https://github.com/smithv22/soloproject',
            demo: 'www.neiasoftwaredesign.com'
        },
        {
            id: 6,
            image: Languages,
            title: 'Coming Soon',
            github: 'https://github.com/smithv22/soloproject',
            demo: 'www.neiasoftwaredesign.com'
        },

    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={ image } alt={ title } />
                                </div>
                                <h3>{ title }</h3>
                                <div className="portfolio__item-cta">
                                    <a href="{ github }" className='btn' target='_blank'>Github</a>
                                    <a href="{ demo }" className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio ;