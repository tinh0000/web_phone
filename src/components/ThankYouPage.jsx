// src/components/ThankYouPage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Lấy thông tin người thanh toán từ localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem("user"));
    setUserInfo(storedUserInfo);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="thank-you-page">
            <h2>Cảm ơn bạn đã mua hàng!</h2>
            {userInfo && (
              <div>
                <p>Chúng tôi đã nhận được đơn hàng của bạn.</p>
                <h3>Thông tin người thanh toán:</h3>
                <p>Họ và tên: {userInfo.fullName}</p>
                <p>Địa chỉ: {userInfo.address}</p>
                <p>Số tài khoản: {userInfo.credit}</p>
              </div>
            )}
            <Link to={"/"}>Quay về trang chủ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
