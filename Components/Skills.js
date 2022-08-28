import React from "react";

const Skill = (skill) => {
    return (
        <div className="d-flex flex-column skill">
            <div className="skill-name">
                {skill.name}
            </div>
            <div className="skill-bar" style={{width :`${skill.bar}%`, backgroundColor : skill.backgroundColor}}>
            </div>
        </div>
    )
}

const Skills = () => {
    return (
        <div id="Skills" className="skill-wrapper d-flex flex-column align-items-center">
            <h2 className="mySkills">My Skills</h2>            
                <div className="d-flex skills-container">
                    <div className="skills-description"> 
                            As I start this second year of my university studies, I have discovered that I am absolutely passionate about coding, whether it be programming in general or the community of brilliant people that surrounds it, there is nothing that I would rather do! Eager to learn every day, I aspire to become a great Backend Engineer with a focus in architecture, API development and Database administration. I love to take on challenges, especially when I am out of my comfort zone as it enables a great <a href="https://stackoverflow.blog/2020/01/11/hello-world-want-to-be-a-developer-learn-how-to-learn/">learning</a> experience. In the hopes
                    </div>
                    <div className="skills-bars-container">
                        <Skill name={"Frontend"} bar={50} backgroundColor={'#35A99B'}/>
                        <Skill name={"Backend"} bar={90} backgroundColor={'#76A935'}/>
                        <Skill name={"Database"} bar={70} backgroundColor={'#6835A9'}/>
                        <Skill name={"Teamwork"} bar={95} backgroundColor={'#F2D3BD'}/>
                    </div>
                </div>
        </div>
    )
}
// d-flex flex-column justify-content-center -> add this if you want the skills bars to be centered

export default Skills;