import "./toggle.css"
import Sun from "../../img/ligth.jpg"
import Moon from "../../img/moon.jpg"

const Toggle = () => {
    return (
        <div className="t">
           <img src={Sun} className="t-icon" alt=""></img>
           <img src={Moon} className="t-icon" alt=""></img>
           <div className="t-button"></div>

        </div>
    )
}
export default Toggle