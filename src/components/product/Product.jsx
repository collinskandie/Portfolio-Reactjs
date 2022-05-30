import "./product.css";
const Product = ({ img, link, title, desc, gitHub }) => {
  return (
    <>
      <section className="projects">
        <div className="all-items">
          <div className="item">
            <div className="left">
              <div className="img">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="right">
              <h2 className="project-title" color="green">{title}</h2>
              <p className="project-desc">{desc}</p>
              <div className="buttons">
                <a href={gitHub} className="primary-btn">
                  GitHub
                </a>
                <a href={link} className="primary-btn outline">
                  <span>Live Preview</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div className="pp">
    //   <div className="p">
    //     <div className="p-card bg"></div>
    //     <div className="p-card">
    //       <img src={img} alt="" className="p-img" />
    //     </div>
    //   </div>
    //   <div className="p-description">
    //     <br />
    //     <h4>{title}</h4>
    //     <hr></hr>
    //     <p>{desc}</p>
    //     <p>
    //       <a href={gitHub}>GitHub Link</a>
    //     </p>
    //   </div>
    // </div>
  );
};

export default Product;
