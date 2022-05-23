import "./intro.css"
import Me from "../../img/Me.jpg"
const Intro = () => {
    return (
        <div className = "i">
        <div className = "i-left">
            <div className = "i-left-wrapper">
                <h2 className = "i-intro" > Hello, My name is</h2>
                <h1 className = "i-name"> Collins Kandie</h1>
                
                <hr></hr>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Fullstack Developer</div>
                        <div className="i-title-item">Data Analyst</div>
                        <div className="i-title-item">App developer</div>
                    </div>
                </div>
                <div className="i-description">
                
                    <p>I am <strong>Collins Kipruto (Kandie)</strong>. I am devoted, passionate and timely software developer.
                    Currently taking Bsc in Computer Science at Catholic University.</p>
                    <br></br>
                    <p>I love software engineering because it gives me an opportunity to practice science, art and commerce all at the same time.
                    </p>
                    <br></br>
                    <p> I am deeply motivated by the incredible power of technology and love building solutions that make life better. My current focus and talents are in building software with Python, JavaScript and Java. Head over to the now recent to see what he's up to at the moment.</p>
                </div>
            </div>
         </div>               
         <div className = "i-right" >
            <div className="i-bg">

            </div>
             <img src={Me} alt="" className="i-img"/>
         </div>
        </div>
          
       
    )
}
export default Intro;