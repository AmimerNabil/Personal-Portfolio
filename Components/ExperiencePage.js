import React from 'react';
import ExperienceCard from './ExperienceCard';
``
import LB123_img from './../public/123LB.png';
import C_sharp_img from './../public/c-sharp-skill.png';
import CodeJam_img from './../public/codeJam.png';
import DataScience_skill_img from './../public/DataScience-skill.png';
import DataScience_img from './../public/DataScience.png';
import DDC_img from './../public/DDC-logo.png';
import Etherum from './../public/ethereum-skill.png';
import JS from './../public/JS.png';
import NodeJS from './../public/nodeJS.png';
import Python from './../public/python.png';
import React_skill from './../public/react-skill.png';
import School_skill from './../public/school-skill.png';
import Solidity_Skill from './../public/solidity-skill.png';
import School from './../public/school.png';
import SQL_skill from './../public/SQL.png';
import WP_img from './../public/WP_img.png';

const ExperiencePage = () => {

    const loadBoardExperience = {
        date: "2022/05 - 2022/08",
        logo: LB123_img,
        type: "Internship",
        description: "I had the amazing opportunity to work alongside great Developpers and Engineers in this first internship of mine. As a backend intern, my daily tasks were to meddle with API endpoints, fix problems with Databases, develop solutions and application for internal use, etc. It was the best learning experience as I had to opportunity to touch many technologies such as JS, C#, React and many more. Being exposed to a real work environment showed the importance of doing due diligence and most importantly, the importance of being prepared and organized when taking on a project.",
        skills: [Python, JS, C_sharp_img, NodeJS, SQL_skill],
        bg_color:'#F2D3BD',
        hover_bg_color:'#F2BDDA',
        Link: 'https://www.123loadboard.com/'
    }

    const random_forst_exp = {
        date: "2022/01",
        logo: DataScience_img,
        type: "Personal Project",
        description: "This project for me was an introduction to Data science. Thanks to this project, I got introduced to the concepts of machine learning, probability, statistics, and models. The goal was to create a Random-forest classifier from scratch, with nothing but python and no libraries, in order to really understand its functionning. I was able to correctly estimate whether an indivual was at risk of having a haeart disease given a set of covariates. Please look at my github for more information!",
        skills: [DataScience_skill_img, Python],
        bg_color:'#CBBDF2',
        hover_bg_color:'#F2BDDA',
        Link: 'https://github.com/AmimerNabil/Random-Forest-Implementation'
    }
    
    const code_jam_experience = {
        date: "2022/02",
        logo: CodeJam_img,
        type: "Hackathon",
        description: "This was my first hackathon participation and we had the chance to win the 2nd place of this beautiful competition. Me and my team developped a webapp called 'STD' to simplify the organization of their google calendar. The application lets student upload their syllabi, and then automatically updates the student's google calendar with the correct dates for their exams and assignments. This saves a lot of potential time and makes sure that no human error is commited.",
        skills: [Python, JS],
        bg_color:'#BDF2EC',
        hover_bg_color:'#F2BDDA',
        Link : 'https://devpost.com/software/save-the-date-g8ayl4'
    }
    
    const Cp_Founder_Experience = {
        date: "2022/07 - Ongoing",
        logo: School,
        type: "Co-Founder",
        description: "Along with great people from my beloved university, McGill, we have created the CHAP's club, which stands for 'Competitive Hackathons And Programming Club'. Our goal is to provide support for anyone who wishes to be more involved in programming in any shape or form. By doing projects, we provide people who have not yet experienced the professional world the opportunity to learn what it is to be industry standard! ",
        skills: [School_skill],
        bg_color:'#BDDFF2',
        hover_bg_color:'#F2BDDA'
    }
    
    const DDC_Experience = {
        date: "2022/05 - Ongoing",
        logo: DDC_img,
        type: "Contract",
        description: "The mandate of this contract was to create a smart-contract for an NFT launch. This challenge was for me an introduction to web3 applications and the blockchain. Coding a smart contract was for me a completely different experience  than anything else I ever worked on. With the contract being immutable once deployed, we had to be extra careful with its developpement. This taught me the skills of diligence and leadership and most importantly, what it was to undertake a project of my own!",
        skills: [Etherum, Solidity_Skill, React_skill],
        bg_color:'#F2BDBD',
        hover_bg_color:'#F2BDDA',
        Link : 'dauntlessdolphins.com'
    }
    
    const WorkPlanner = {
        date: "2022/07 - Ongoing",
        logo: WP_img,
        type: "Entrepreneurship",
        description: "With a team of dedicated enthusiasts, we are working on an application and web app to facilitate the organisation, communication, and overall interactions between employer and employee. This project is a great way for me and my team to learn the essential skills of leadership, software architecture, tech stacks and much more. It is also a fun way to step into the “big pants” world by trying to leave a mark of our own. ",
        skills: [C_sharp_img, SQL_skill, JS],
        bg_color:'#F2BDDA',
        hover_bg_color:'#F2BDDA'
    }
    
    return (
        <div id="Projects" className='experience-page'>
            <h2 className="myExperiences text-center mb-5">Project And Experience</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-xl-4'>
                        <ExperienceCard {...loadBoardExperience} />
                    </div>
                    <div className='col-lg-6 col-xl-4'>
                        <ExperienceCard {...code_jam_experience} />
                    </div>
                    <div className='col-lg-6 col-xl-4'>
                        <ExperienceCard {...DDC_Experience} />
                    </div>
                    <div className='col-lg-6 col-xl-4'>
                        <ExperienceCard {...random_forst_exp} />
                    </div>
                    <div className='col-lg-6 col-xl-4'>
                        <ExperienceCard {...WorkPlanner} />
                    </div>
                    <div className='col-lg-6 col-xl-4'>
                        <ExperienceCard {...Cp_Founder_Experience} />
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default ExperiencePage;
