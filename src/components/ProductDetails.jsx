import iphone from "../assets/images/ip13promax.webp";
import Header from "./Header";
import "../css/ProductDetails.css";
import Footer from "./Footer";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "./AppContext";

function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { handleAddToCart } = useContext(Context);
  useEffect(() => {
    showProductDetail();
  }, []);
  function showProductDetail() {
    fetch(`https://distinct-drawers-wasp.cyclic.app/products/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setProduct(result);
        console.log(product);
      });
  }
  const handleCapacitySelection = (capacity) => {
    setSelectedCapacity(capacity);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  function formatNumber(number) {
    // Sử dụng toLocaleString để định dạng số
    return Number(number).toLocaleString("vi-VN");
  }
  const calculatePrice = (basePrice) => {
    let price = parseInt(basePrice, 10); // Chuyển đổi basePrice thành số nguyên
    if (selectedCapacity === "256gb") {
      price += 2000000; // Cộng thêm 2 triệu cho dung lượng 256gb
    } else if (selectedCapacity === "512gb") {
      price += 3000000; // Cộng thêm 3 triệu cho dung lượng 512gb
    }
    return price;
  };

  const handleOrder = () => {
    // Xử lý đặt hàng tại đây
    console.log("Đặt hàng với giá:", calculatePrice(product.price));
  };

  return (
    <section className="detail">
      <div className="wapper container">
        <div className="row product-details">
          <h4 className="title text-center mb-5 mt-2 fs-2">
            CHI TIẾT SẢN PHẨM
          </h4>
          <div className="col-lg-5 col-md-12">
            <img src={product.image} alt="" />
          </div>
          <div className="col-lg-7 col-md-12">
            <h4>{product.introduction}</h4>

            <p className="list-capacity">Chọn dung lượng:</p>
            {product.capacity &&
              product.capacity.map((c, index) => (
                <button
                  onClick={() => {
                    handleCapacitySelection(c.DiskSpace);
                  }}
                  key={index}
                  className={`capacity ${
                    selectedCapacity === c.DiskSpace ? "active" : ""
                  }`}>
                  {c.DiskSpace}
                </button>
              ))}

            <p className="list-color">Chọn màu:</p>
            {product.list_color &&
              product.list_color.map((c, index) => (
                <button
                  onClick={() => {
                    handleColorSelection(c.color);
                  }}
                  key={index}
                  className={`capacity ${
                    selectedColor === c.color ? "active" : ""
                  }`}>
                  {c.color}
                </button>
              ))}

            <p className="price-product">
              Giá: {formatNumber(calculatePrice(product.price))} đ
            </p>

            <div className="select">
              <button onClick={handleOrder}>Đặt ngay</button>
              <button
                onClick={() =>
                  handleAddToCart(product, calculatePrice(product.price), 1)
                }>
                Thêm vào giỏ hàng
              </button>
            </div>
            
          </div>
        </div>
        <div className="row">
        <div className="col-12">
            <h5 className="info">Bộ sản phẩm bao gồm</h5>
            <p className="describe">
              Máy mới nguyên seal 100%, chính hãng Apple Việt Nam <br />
              Bộ sản phẩm: Thân máy, Hộp, Cáp, Cây lấy sim, Sách hướng dẫn, Túi
              giấy cao cấp Di Động Việt <br />
              Bảo hành độc quyền: Bảo hành hư lỗi - Đổi mới trong vòng 30 ngày.
              Bảo hành chính hãng 12 tháng (Xem chi tiết) Bảo hành hư lỗi - rơi
              vỡ.
            </p>
          </div>
          <div className="col-12">
            <h5 className="info">Nội dung: </h5>
            <p className="describe">
              {product.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
