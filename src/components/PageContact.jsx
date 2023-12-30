import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../css/PageContact.css";

function PageContact() {
  return (
    <section className="contact">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="text-center mb-4">Gửi thông tin đến chúng tôi</h3>
            <form action="/action_page.php">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Điện thoại"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="comment"
                  name="text"
                  placeholder="Comment goes here"
                  defaultValue={""}
                />
                <label htmlFor="comment">Lời nhắn</label>
              </div>
              <button type="submit" className="btn btn-primary mb-4">
                Gửi
              </button>
            </form>
          </div>
          <div className="col-lg-6 text-center">
            <h3 className="mb-4">Liên hệ</h3>
            <strong>Trụ sở chính</strong>
            <br />
            <br />
            <strong>- Hà Nội:</strong>
            <span>Số 349 Kim Mã, Q.Ba Đình, Hà Nội</span>
            <br />
            <strong>Hotline:</strong>
            <span>18007080</span>
            <br />
            <br />
            <strong>- TP-HCM:</strong>
            <span>Số 39 Nguyễn Trường Tộ, P.13, Q.4, TP-HCM</span>
            <br />
            <strong>Hotline:</strong>
            <span>18008080</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageContact;
