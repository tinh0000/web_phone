import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import image1 from "../assets/images/ip14promax.webp";
import image2 from "../assets/images/samsung_galaxy_s23_ultra.webp";
import image3 from "../assets/images/oppo_reno10_5g.webp";
import image4 from "../assets/images/xiaomi_13t_green.webp";
import image5 from "../assets/images/macbook-pro-14-inch-m2-pro-2023-512gb.webp";
import image6 from "../assets/images/ipad-pro-11-inch-m2-128gb.webp";
import "../css/PageProduct.css";
import { useSearchParams } from "react-router-dom";

function PageSearch() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = () => {
      if (
        searchParams.get("search") !== null &&
        searchParams.get("search") !== ""
      ) {
        fetch(`https://distinct-drawers-wasp.cyclic.app/products?q=${searchParams.get("search")}`)
          .then((data) => {
            return data.json();
          })
          .then((result) => {
            setProducts(result);
          });
      } else {
        fetch(`http://localhost:8080/products`)
          .then((data) => {
            return data.json();
          })
          .then((result) => {
            setProducts(result);
          });
      }
    };
    loadData();
  }, [searchParams]);

  return (
    <section className="product-list">
      <div className="container">
        <div className="product-list">
          <div className="product-list-content">
            {searchParams.get("search") !== null &&
            searchParams.get("search") !== "" ? (
              <div className="row d-flex card-group">
                {products !== undefined && products.length > 0 ? (
                  <h2 className="m-3">Sản phẩm đã tìm thấy</h2>
                ) : (
                  <h2 className="m-3">Không tìm thấy sản phẩm nào</h2>
                )}

                {products.map((product, productIndex) => (
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
                          Giá: {product.reducedprice} <br />
                          <span className="price">{product.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row d-flex card-group">
                {products.map((product, productIndex) => (
                <div className="col-xl-3 col-lg-6 col-md-12" key={productIndex}>
                  <div className="card mt-2" style={{ width: "250px" }}>
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
                        Giá: {product.reducedprice} <br />
                        <span className="price">{product.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageSearch;
