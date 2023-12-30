import { Link } from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";

function PageIpad() {
    return (
        <>

            <section className="list-product">
                <div className="product">
                    <a className="list-name" href="">Ipad Mini</a>
                    <a className="list-name" href="">Ipad Pro</a>
                    <a className="list-name" href="">Ipad Air</a>
                </div>
            </section>

            <section>
                <div className="container mb-5">
                    <div className="row">
                        <div className="row d-flex card-group mt-2">
                                <div className="col-xl-3 col-lg-4 col-md-12">
                                    <div className="card mt-2" style={{ width: "250px" }}>
                                        <div className="thumb">
                                            <img
                                                className="card-img-top"
                                                src="images/ipad-gen-9-64gb.webp"
                                                alt="Card image"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPad Gen 9 2021 | Wifi 64GB</h5>
                                            <p className="card-text text-danger">
                                                Giá: 6.950.000 đ <br />
                                                <span className="price">9.490.000 đ</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-12">
                                    <div className="card mt-2" style={{ width: "250px" }}>
                                        <div className="thumb">
                                            <img
                                                className="card-img-top"
                                                src="images/ipad-2022-64gb.webp"
                                                alt="Card image"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPad 10.9-inch 2022 | 64GB Wifi</h5>
                                            <p className="card-text text-danger">
                                                Giá: 10.390.000 đ <br />
                                                <span className="price">12.990.000 đ</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="card mt-2" style={{ width: "250px" }}>
                                    <div className="thumb">
                                        <img
                                            className="card-img-top"
                                            src="images/ipad-pro-11-inch-m2-128gb.webp"
                                            alt="Card image"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPad Pro M2 11-inch (2022) | 128GB Wifi</h5>
                                            <p className="card-text text-danger">
                                                Giá: 18.330.000 đ <br />
                                                <span className="price">21.790.000 đ</span>
                                            </p>
                                    </div>
                                </div>
                                </div>
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="card mt-2" style={{ width: "250px" }}>
                                    <div className="thumb">
                                        <img className="card-img-top" src="images/ipad-e1.webp" alt="Card image" style={{ width: "100%" }} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">iPad Mini 6 2021 | 64GB Wifi</h5>
                                        <p className="card-text text-danger">
                                            Giá: 10.860.000 đ <br />
                                            <span className="price">16.890.000 đ</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageIpad;