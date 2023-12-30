import logo from "../assets/images/logo.webp"
import "../css/Footer.css";

function Footer() {
    return (
        <>
            <section className="footer bg-dark text-white py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sx-12 col-sm-6 col-md-4 col-lg-3">
                            <a href="/" className="logo-wrapper mb-4 d-block ">	
                            <img src={logo} alt="logo Techstore" width={164} height={50} />
                            </a>
                            <div className="single-contact">
                            <div className="content"><strong>Địa chỉ: </strong>
                                <span>Số 79 Pasteur, P.15, Q.3</span>
                            </div>
                            </div>
                            <div className="single-contact">
                            <div className="content">
                                <strong>Số điện thoại: </strong>
                                <a className="link" title= {18008080} href="tel:18008080">18008080</a>
                            </div>
                            </div>
                            <div className="single-contact">
                            <div className="content">
                                <strong>Email: </strong>
                                <a title="techstore.com" className="link" href="techstore.com">techstore.com</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-sx-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <h4 className="title-menu clicked">Hỗ trợ khách hàng</h4>
                            <p>Giới thiệu</p>
                            <p>Hệ thống cửa hàng</p>
                            <p>Hướng dẫn mua hàng Online</p>
                        </div>
                        <div className="col-sx-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <h4 className="title-menu clicked">Chính sách hỗ trợ</h4>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách bảo mật</p>
                            <p>Chính sách bảo hành</p>
                        </div>
                        <div className="col-sx-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <h4 className="title-menu clicked">Tổng đài hỗ trợ </h4>
                            <p>
                                <span />Gọi khiếu nại:
                                <a className="textfooter text-primary font-weight-bold" href="tel:18001898 "> 18001898 </a>
                            </p><p>
                                <span />Gọi bảo hành:
                                <a className="textfooter text-primary font-weight-bold" href="tel:18008089 "> 18008089 </a>
                            </p>
                            <p>
                                <span />Gọi mua hàng:
                                <a className="textfooter text-primary font-weight-bold" href="tel:18008080"> 18008080 </a>
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        </>
    );
}

export default Footer;