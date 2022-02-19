import "./intro.css"
const Intro = () => {
    return (
        <div className = "i">
        <div className = "i-left">
            <div className = "i-left-wrapper">
                <h2 className = "i-intro" > Hello, My name is</h2>
                <h1 className = "i-name"> Collins Kandie</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web developer</div>
                        <div className="i-title-item">UI/UX designer</div>
                        <div className="i-title-item">App developer</div>
                    </div>
                </div>
            </div>
         </div>               
         <div className = "i-right" ></div>
        </div>
          
       
    )
}
export default Intro;