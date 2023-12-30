import { useState } from "react";
import logo from "../assets/images/logo.webp";
import "../css/Header.css";
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigateTo = useNavigate();
  const [inputSearch, setInputSearch] = useState("")
  const handelSearch = (e) => {
    e.preventDefault();
    navigateTo(`/pagesearch?search=${inputSearch}`);
    setInputSearch("")
  };

  return (
    <div className="header">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Web bán điện thoại</title>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Allura&family=Kanit&family=Roboto+Slab:wght@500&family=Roboto:wght@400;700&family=Sedgwick+Ave+Display&display=swap"
        rel="stylesheet"
      />

      <link href="./css/style.css" rel="stylesheet" />

      <section className="header">
        <div className="container-fluid bg-danger mb-5 text-center text-white py-1">
          <span>SẢN PHẨM CHÍNH HÃNG - ĐỔI TRẢ TRONG 60 NGÀY</span>
        </div>

        <div className="header container py-3">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="logo" />
            </div>

            <div className="col-md-3"></div>
            <div className="col-md-2"></div>
            <div className="col-md-4 d-flex align-items-center">
              <form
                className="input-group mb-3"
                onSubmit={handelSearch}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên sản phẩm..."
                  value={inputSearch}
                  onChange={(e) => {
                    setInputSearch(e.target.value)
                  }}
                />
                <button className="btn btn-success" type="submit">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
