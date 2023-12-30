import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../assets/images/banner-home.webp";
import "../css/Home.css";

function PageHome() {
  const [products, setProducts] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    fetch("https://distinct-drawers-wasp.cyclic.app/products")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setProducts(result);
      });
    fetch("https://distinct-drawers-wasp.cyclic.app/label")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setLabels(result);
      });
  }, []);
  function formatNumber(number) {
    // Sử dụng toLocaleString để định dạng số
    return Number(number).toLocaleString("vi-VN");
  }

  return (
    <>
      <section className="banner">
        <div className="container">
          <img src={image} alt="" height={350} style={{objectFit: "cover"}} />
        </div>
      </section>

      <section className="product">
        <div className="container">
          <div className="product-list">
            <div className="product-list-content">
              {labels.map((label, labelIndex) => (
                <div key={labelIndex}>
                  <h2>
                    <span className="badge bg-secondary mt-4">
                      {label.name}
                    </span>
                  </h2>
                  <div className="row d-flex card-group">
                    {products
                      .filter((product) => product.id_label === label.id)
                      .slice(0, 8) // Chọn 8 sản phẩm đầu tiên
                      .map((product, productIndex) => (
                        <div
                          className="col-xl-3 col-lg-6 col-md-12"
                          key={productIndex}>
                          <div className="card mt-2">
                            <div className="thumb">
                              <Link to={`/product/${product.id}`}>
                                <img
                                  className="card-img-top"
                                  src={product.image}
                                  alt="Card image"
                                  style={{ width: "100%" }}
                                />
                              </Link>
                            </div>
                            <div className="card-body">
                              <h5 className="card-title">
                                <Link className="link-product" to={`/product/${product.id}`}>
                                  {product.introduction}
                                </Link>
                              </h5>
                              <p className="card-text text-danger">
                                Giá: {formatNumber(product.reducedprice)} đ <br />
                                <span className="price">{formatNumber(product.price)} đ</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {label.id === 4 ? (
                      <div className="container-banner mt-4">
                        <img
                          src="https://hbmedia.com.vn/wp-content/uploads/2019/09/Banner_2-1400x525.jpg"
                          alt="banner-laptop"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageHome;
