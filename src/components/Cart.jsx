import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./AppContext";

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartCount,
    cartSubTotal,
    handleUpdateQuantity,
    handleRemoveFromCart,
  } = useContext(Context);

  const handleBackToShop = () => {
    navigate("/");
  };

  function formatNumber(number) {
    // Sử dụng toLocaleString để định dạng số
    return Number(number).toLocaleString("vi-VN");
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black">
                          Giỏ hàng
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cartCount} sản phẩm
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cartItems.map((value, key) => (
                        <div key={key}>
                          <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={value.image}
                                fluid
                                className="rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                Mã sản phẩm: {value.id}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0">
                                {value.name}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="3"
                              lg="3"
                              xl="3"
                              className="d-flex align-items-center">
                              <button
                                style={{
                                  border: "none",
                                  background: "transparent",
                                }}
                                color="link"
                                className="px-2"
                                onClick={() =>
                                  handleUpdateQuantity("minus", value)
                                }>
                                <MDBIcon fas icon="minus" />
                              </button>

                              <MDBInput
                                type="number"
                                min="0"
                                value={value.quantity}
                                size="sm"
                              />

                              <button
                                style={{
                                  border: "none",
                                  background: "transparent",
                                }}
                                color="link"
                                className="px-2"
                                onClick={() =>
                                  handleUpdateQuantity("plus", value)
                                }>
                                <MDBIcon fas icon="plus" />
                              </button>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                {formatNumber(value.price * value.quantity)} đ
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <a
                                href="#!"
                                className="text-muted"
                                onClick={() => handleRemoveFromCart(value)}>
                                <MDBIcon fas icon="times" />
                              </a>
                            </MDBCol>
                          </MDBRow>

                          <hr className="my-4" />
                        </div>
                      ))}

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <Link to="/pageproduct">
                            <MDBIcon
                              fas
                              icon="long-arrow-alt-left me-2"
                              onClick={handleBackToShop}
                            />{" "}
                            Quay về cửa hàng
                          </Link>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1">
                        Tính toán
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Nhập mã giảm giá" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Tổng giá:
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          {formatNumber(cartSubTotal)}đ
                        </MDBTypography>
                      </div>

                      <Link to={"/pay"} className="btn btn-primary">
                        Thanh toán
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
