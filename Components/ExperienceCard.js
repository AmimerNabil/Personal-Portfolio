import React from 'react';
import Image from 'next/image';

const ExperienceCard = ({date, logo, type, description, skills, bg_color, Link}) => {
    return (
        <div className='experience-card' style={{backgroundColor: bg_color}}>
            <div className='experience-card-header'>
                <div className='experience-card-logo'>
                    <Image src={logo} alt='logo'/>
                </div>
                <div className='experience-card-date'>
                    {date}
                </div>
            </div>
            <div className='experience-card-description text-center'>
                <h2>{type}</h2>
                <div>
                    {description}
                    <hr/>
                    <a href="https://dauntlessdolphins.com"> {Link}</a>
                </div>
            </div>
            <div className='experience-card-footer'>
                {
                    skills.map((image) => (
                        <div className='image-wrapper'>
                            <Image src={image} alt='Skill'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExperienceCard;