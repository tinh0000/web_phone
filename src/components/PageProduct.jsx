import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import image1 from "../assets/images/ip14promax.webp";
import image2 from "../assets/images/samsung_galaxy_s23_ultra.webp";
import image3 from "../assets/images/oppo_reno10_5g.webp";
import image4 from "../assets/images/xiaomi_13t_green.webp";
import image5 from "../assets/images/macbook-pro-14-inch-m2-pro-2023-512gb.webp";
import image6 from "../assets/images/ipad-pro-11-inch-m2-128gb.webp";
import "../css/PageProduct.css";

function PageProduct() {
  const [labels, setLabels] = useState([]);

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    label_name: "",
    label_id: 0,
  });
  function formatNumber(number) {
    // Sử dụng toLocaleString để định dạng số
    return Number(number).toLocaleString("vi-VN");
  }

  useEffect(() => {
    const loadData = () => {
      if (filter.label_id === 0) {
        fetch(`https://distinct-drawers-wasp.cyclic.app/products`)
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
      } else {
        fetch(`https://distinct-drawers-wasp.cyclic.app/products?id_label=${filter.label_id}`)
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
      }
    };
    loadData();
  }, [filter]);
  const handleFilter = (id, name) => {
    setFilter({
      label_name: name,
      label_id: id,
    });
  };
  return (
    <>
      <section className="select-list">
        <div className="container">
          <div className="row">
            {labels.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFilter(item.id, item.name)}
                  className="col-lg-2 col-sm-6 col-6 mt-2 ">
                  <div className="card" style={{ alignItems: "center" }}>
                    <img
                      className="icon"
                      src={item.image}
                      alt="iphone"
                      style={{ width: 80 }}
                    />
                    <div className="card-body">
                      <div className="name" href="#">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-list">
        <div className="container">
          <div className="product-list">
            <div className="product-list-content">
              {filter.label_id === 0 ? (
                labels.map((label, labelIndex) => (
                  <div key={labelIndex}>
                    <h2>
                      <span className="badge bg-secondary mt-4">
                        {label.name}
                      </span>
                    </h2>
                    <div className="row d-flex card-group">
                      {products
                        .filter((product) => product.id_label === label.id)
                        .slice(0, 4) // Chọn 4 sản phẩm đầu tiên
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
                                  <Link
                                    className="link-product"
                                    to={`/product/${product.id}`}>
                                    {product.introduction}
                                  </Link>
                                </h5>
                                <p className="card-text text-danger">
                                  Giá: {formatNumber(product.reducedprice)} đ{" "}
                                  <br />
                                  <span className="price">
                                    {formatNumber(product.price)} đ
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      {label.id === 4 ? (
                        <div className="container-banner mt-5">
                          <img
                            src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
                            alt="banner-laptop"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h2>
                    <span className="badge bg-secondary mt-4">
                      {filter.label_name}
                    </span>
                  </h2>
                  <div className="row d-flex card-group py-5">
                    {products.map((product, productIndex) => (
                      <div className="col-lg-3 col-md-6" key={productIndex}>
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
                              <Link
                                className="link-product"
                                to={`/product/${product.id}`}>
                                {product.introduction}
                              </Link>
                            </h5>
                            <p className="card-text text-danger">
                              Giá: {formatNumber(product.reducedprice)} đ <br />
                              <span className="price">
                                {formatNumber(product.price)} đ
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageProduct;
