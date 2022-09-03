
import {useState, useEffect} from 'react';
import NaviBar from './NaviBar'

const WelcomePage = () => {

    const [aGuy, setAGuy] = useState() 
    
    function typeText() {
        setTimeout(() => {
            document.getElementById('just_a_guy').classList.remove('op0');
        }, 300)

        const letter = '<Just a guy who likes to code/>';
        const timeout = 1000;
        
        for (let i = 0; i <= letter.length; i++) {
            setTimeout( () => {
                setAGuy(letter.slice(0, i))
            }, timeout);
            timeout += 50;
        }
    }
    
    useEffect(() => {
        typeText();
    }, [])

    return (
        <div className='imageContainer'>
            <NaviBar/>
            <div className='text'>
                <div className='text-wrapper' >  
                    <h4 style={{color : '#E9B9C2'}}>Aspiring Backend Architect and Engineer</h4>
                    <h1 id='just_a_guy' className='typewriter' style={{color : '#E9B9C2'}}>{aGuy}<span className="blinker"></span></h1>
                    <h2 style={{color : '#E9B9C2'}}>Nabil Amimer</h2>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;


