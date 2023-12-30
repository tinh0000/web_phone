import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
// import "../css/Home.css";
import "../css/PageBase.css"
import Footer from "./Footer";
import { useContext } from "react";
import { Context } from "./AppContext";

function PageBase() {
  const { cartCount } = useContext(Context);
  return (
    <>
      <Header />

      <section className="menu bg-danger">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/">
                        Trang chủ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/pageproduct">
                        Sản phẩm
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-white"
                        to="/pageintroduction">
                        Giới thiệu
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/contact">
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-md-4 text-center">
              <div className="row">
                <div className="col">
                  <Link to="shopping-card" className="position-relative">
                    <span className="fs-3">
                      <i className="fa-solid fa-cart-plus" />
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                      {cartCount}{" "}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Outlet />
      
      <Footer />
    </>
  );
}

export default PageBase;
