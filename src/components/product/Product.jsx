import "./product.css";
const Product = ({ img, link, title, desc, gitHub }) => {
  return (
    <div className="pp">
      <div className="p">
        <div className="p-card bg"></div>
        <div className="p-card">
          <img src={img} alt="" className="p-img" />
        </div>
      </div>
      <div className="p-description">
        <br />
        <h4>{title}</h4>
        <hr></hr>
        <p>{desc}</p>
        <p>
          <a href={gitHub}>GitHub Link</a>
        </p>
      </div>
    </div>
  );
};

export default Product;
