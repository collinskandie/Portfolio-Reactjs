import Product from "../product/Product";
import "./productlist.css";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title"> Featured projects</h1>
        <p className="pl-desc">Some of my recent projects are listed below.</p>
      </div>
      <div className="">
      {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.livelink} title={item.title} desc={item.description} gitHub={item.gitHubLink} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
