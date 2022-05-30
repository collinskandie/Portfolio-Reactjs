import "./intro.css";
import Me from "../../img/Me.jpg";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, My name is</h2>
          <h1 className="i-name"> Collins Kandie</h1>
          <hr />
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Fullstack Developer</div>
              <div className="i-title-item">Data Analyst</div>
              <div className="i-title-item">App developer</div>
            </div>
          </div>
          <div className="i-description">
            <p>
              I am passionate software developer. I build web apps, mobile apps with Javascripts and Python. I am also well conversant with other tech stucks. Currently taking Bsc in
              Computer Science at Catholic University.
            </p>
            <br></br>
            <p>
              I love software engineering because it gives me the opportunity to
              practice science, art and commerce all at the same time.
            </p>
            <br></br>
            <p>              
              I am deeply motivated by the incredible power of technology and I
              love building solutions that make life better. My current focus is
              building software with Python and JavaScript. Head over to the{" "}
              <a href="./">recent page</a> to see what I am working on.
            </p>
          </div>
          <br/>
          <div>
            <span>
              <a href="./" className="button">
                Learn more...
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Collins" className="i-img" />
      </div>
    </div>
  );
};
export default Intro;
