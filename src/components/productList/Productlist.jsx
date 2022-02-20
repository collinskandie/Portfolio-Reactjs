import Product from "../product/Product"
import "./productlist.css"
import { products } from "../../data"
const ProductList = () =>{
    return(
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title"> Featured projects and Articles</h1>
                <p className="pl-desc">Some of my recent projects are listed below.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) =>(
                <Product key={item.id} img={item.img} link={item.link}/>
                    ))} 
            </div>         
         </div>
        

    )
}
export default ProductList 