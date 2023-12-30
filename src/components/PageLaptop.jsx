import { Link } from "react-router-dom"
import Footer from "./Footer";
import Header from "./Header";
import "../css/PageLaptop.css";


function PageLaptop() {
    return (
        <>
            <section className="list-product">
                <div className="product">
                    <a className="list-name" href="">MacBook Air</a>
                    <a className="list-name" href="">MacBook Pro</a>
                    <a className="list-name" href="">MacBook Mini</a>
                </div>
            </section>

            <section className="product-aggregated">
                <div className="aggregated-list">
                    <div className="container">
                        <div className="product-list" />
                            <div className="product-list-content">
                                <div className="row d-flex card-group">
                                    <div className="col-xl-3 col-lg-6 col-md-12">
                                        <div className="card mt-2" style={{width: '250px'}}>
                                        <div className="thumb">
                                            <img className="card-img-top" src="images/ip14pro.webp" alt="Card image" style={{width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPhone 14 Pro 512GB Chính Hãng (VN/A)</h5>
                                            <p className="card-text text-danger">Giá: 37.890.000 đ <br /><span className="price">39.990.000 đ</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-12">
                                        <div className="card mt-2" style={{width: '250px'}}>
                                        <div className="thumb">
                                            <img className="card-img-top" src="images/ip15promax.webp" alt="Card image" style={{width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPhone 15 Pro 256GB Chính hãng (VN/A)</h5>
                                            <p className="card-text text-danger">Giá: 32.790.000 đ <br /><span className="price">38.990.000 đ</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-12">
                                        <div className="card mt-2" style={{width: '250px'}}>
                                        <div className="thumb">
                                            <img className="card-img-top" src="images/ip14Plus256gb.webp" alt="Card image" style={{width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPhone 13 Plus 256GB Chính Hãng (VN/A)</h5>
                                            <p className="card-text text-danger">Giá: 24.790.000 đ <br /><span className="price">28.990.000 đ</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-6 col-md-12">
                                        <div className="card mt-2" style={{width: '250px'}}>
                                        <div className="thumb">
                                            <img className="card-img-top" src="images/ip14promax.webp" alt="Card image" style={{width: '100%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">iPhone 15 Pro 1TB Chính hãng (VN/A)</h5>
                                            <p className="card-text text-danger">Giá: 39.790.000 đ <br /><span className="price">43.990.000 đ</span></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row d-flex card-group mt-4 mb-5">
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/iphone-13-dd-1.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">iPhone 13 Series Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 13.790.000 đ <br /><span className="price">16.990.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/iphone-12-dd.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">iPhone 12 64GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 12.790.000 đ <br /><span className="price">14.590.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/iphone-14-plus-dd.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">iPhone 14 Plus 128GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 21.590.000 đ <br /><span className="price">26.990.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/iphone-11-dd.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">iPhone 11 64GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 10.390.000 đ <br /><span className="price">12.890.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row d-flex card-group mt-4 mb-5">
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/samsung_galaxy_z_flip5.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">Samsung Galaxy Z Flip5 5G 512GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 22.790.000 đ <br /><span className="price">29.990.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/samsung_galaxy_z_flip5_xanh.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">Samsung Galaxy Z Flip5 5G 256GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 20.790.000 đ <br /><span className="price">25.990.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/samsung_galaxy_z_fold5_xanh.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">Samsung Galaxy Fold5 512GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 36.590.000 đ <br /><span className="price">40.990.000 đ</span></p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-12">
                                <div className="card mt-2" style={{width: '250px'}}>
                                    <div className="thumb">
                                    <img className="card-img-top" src="images/samsung_galaxy_a54.webp" alt="Card image" style={{width: '100%'}} />
                                    </div>
                                    <div className="card-body">
                                    <h5 className="card-title">Samsung Galaxy A54 5G 256GB Chính Hãng</h5>
                                    <p className="card-text text-danger">Giá: 10.790.000 đ <br /><span className="price">15.990.000 đ</span></p>
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

export default PageLaptop;