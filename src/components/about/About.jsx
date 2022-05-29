import "./about.css"
import Me from "../../img/Collo.jpg"
const About = () => {
    return (
        <div className="a">
        <div className="a-left">
            <div className="a-card bg">               
            </div>
            <div className="a-card">
             <img src={Me} alt="" className="a-img"></img>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">I love software engineering because it gives me an opportunity to be creative and build solutions that affect my daily life.</p>
            <p className="a-desc">I am motivated by technology and I love building solutions that make life better. My current focus is on building software with with Python, JavaScript and Java. Check out my <a href="https://github.com/collinskandie">GitHub profile</a> for my previous and current projetcs. You can also check it</p>
            <br></br>
            <p className="a-git-title">My github portfolio</p>
                <div >	
                    <img src="http://ghchart.rshah.org/003399/collinskandie" alt="Commit graph" ></img>	
                    <p>** Each blue square represents 24hr coding activity</p>
                    <a href="https://wakatime.com/@d4dca390-d82e-4af6-a51e-279cff40773e"><img src="https://wakatime.com/badge/user/d4dca390-d82e-4af6-a51e-279cff40773e.svg" alt="Total time coded since May 9 2021" /></a>
                </div> 
        </div>
        </div>
    )
}
export default About