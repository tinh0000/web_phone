import React, { useContext, useEffect, useState } from "react";
import { Context } from "./AppContext";
import { Link, useNavigate } from "react-router-dom";
const PagePay = () => {
  const [cartItems, setCartItems] = useState([]);
  const { cartSubTotal } = useContext(Context);
  const [formUser, setFormUser] = useState({
    fullName: "",
    address: "",
    credit: "",
  });
  const history = useNavigate();

  useEffect(() => {
    // Lấy danh sách giỏ hàng từ localStorage khi component được mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
    console.log(storedCartItems);
  }, []);

  const isCheckTotal = () => {
    if(cartSubTotal === 0) {
      return true
    }
    else {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lưu thông tin người thanh toán vào localStorage với key là "user"
    localStorage.setItem("user", JSON.stringify(formUser));

    // Tiếp theo, bạn có thể thực hiện các bước xử lý thanh toán khác ở đây
    console.log("Thông tin người thanh toán:", formUser);
    localStorage.removeItem("cartItems");
    history("/thank-you");
  };
  const handleOnChangeText = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value,
    });
  };

  function formatNumber(number) {
    // Sử dụng toLocaleString để định dạng số
    return Number(number).toLocaleString("vi-VN");
  }

  return (
    <div className="pagepay">
      <div className="container">
        <div className="row">
          {/* Cột Thông Tin Thanh Toán */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <h2>Thông Tin Thanh Toán</h2>

              <div className="mb-3">
                <label htmlFor="formName" className="form-label">
                  Họ và Tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formName"
                  placeholder="Nhập họ và tên"
                  name="fullName"
                  onChange={handleOnChangeText}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formAddress" className="form-label">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formAddress"
                  placeholder="Nhập địa chỉ"
                  name="address"
                  required
                  onChange={handleOnChangeText}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formAccount" className="form-label">
                  Số tài khoản
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="formAccount"
                  placeholder="Nhập số tài khoản"
                  name="credit"
                  onChange={handleOnChangeText}
                />
              </div>

              <button disabled={isCheckTotal()} type="submit" className="btn btn-primary">
                Thanh Toán
              </button>
            </form>
          </div>

          {/* Cột Danh Sách Giỏ Hàng */}
          <div className="col-md-6">
            <h2>Danh Sách Giỏ Hàng</h2>
            <ul className="list-group">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex align-items-center">
                  <div className="cart-item-image mr-3">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="image-thumbnail"
                    />
                  </div>
                  <div className="cart-item-details">
                    <div>
                      <strong>{item.name}</strong>
                    </div>
                    <div>Số lượng: {item.quantity}</div>
                    <div>Giá: {formatNumber(item.price)} đ</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <strong>Tổng Tiền: {formatNumber(cartSubTotal)} VND</strong>
            </div>
            {isCheckTotal() ? <div className="mt-3">
              <strong>Bạn chưa mua món hàng nào, vui lòng quay lại trang <Link to={"/pageproduct"}>sản phẩm</Link> để tiếp tục</strong>
            </div> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePay;
