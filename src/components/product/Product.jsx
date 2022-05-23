import "./product.css";
const Product = ({ img, link }) => {
  return (
    <div className="pp">
      <div className="p">
        <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        </a>
      </div>
      <div className="p-description">
        <h4>Title</h4>
        <p>Describe the work done</p>
        <p>Github link</p>
      </div>
    </div>
  );
};

export default Product;
