import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "../css/PageIntroduction.css";

function PageIntroduction() {
  return (
    <>
      <section className="content1-introduction">
        <div className="conten-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="thumb">
                  <h4 style={{ margin: "30px 0" }}>GIỚI THIỆU CHUNG</h4>
                  <p>
                    Trong suốt nhiều năm qua, bằng những nỗ lực không mệt mỏi,
                    trung thành với chính sách “tận tâm phục vụ khách hàng”,
                    TechStore quyết tâm hoạt động, hoàn thiện hình ảnh một
                    thương hiệu gần gũi, thân thiện và hướng tới mục tiêu phục
                    vụ khách hàng là ưu tiên hàng đầu.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <h4 style={{ margin: "30px 0" }}>TẦM NHÌN</h4>
                <p>
                  Cùng với sự phát triển của xã hội và thị trường công nghệ,
                  Công ty TechStore đã, đang và sẽ nỗ lực không ngừng để trở
                  thành đối tác uy tín đối với các nhà sản xuất Kỹ thuật số hàng
                  đầu thế giới, đồng thời là điểm đến tin cậy của khách hàng
                  Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-introduction">
        <div className="container mt-4">
          <img
            src="https://previews.123rf.com/images/kchung/kchung1508/kchung150800205/43588081-male-hand-pressing-introduction-key-button-over-blue-abstract-background.jpg"
            alt=""
            style={{ height: "400px" }}
          />
        </div>
      </section>

      <section className="content2-introduction">
        <div className="content-center">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h3 className="titlet-top m-5">GIÁ TRỊ CỐT LÕI</h3>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 margin-bottom: 50px">
                <div className="title-gt">
                  <img
                    src="https://png.pngtree.com/png-vector/20210904/ourlarge/pngtree-best-quality-icon-png-image_3869630.jpg"
                    alt="icon"
                    style={{
                      width: "70px",
                      margin: "0 auto",
                      marginBottom: "30px",
                    }}
                  />
                  <h5>Chất lượng</h5>
                  <p>
                    Uy tín, trách nhiệm luôn đi đầu để đảm bảo chất lượng, đem
                    đến cho khách hàng sự an tâm tuyệt đối khi mua sắm các sản
                    phẩm công nghệ.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="title-gt">
                  <img
                    src="https://png.pngtree.com/png-vector/20210904/ourlarge/pngtree-best-quality-icon-png-image_3869630.jpg"
                    alt="icon"
                    style={{
                      width: "70px",
                      margin: "0 auto",
                      marginBottom: "30px",
                    }}
                  />
                  <h5>Tin cậy</h5>
                  <p>
                    Luôn chú trọng trong hoạt động phát triển thương hiệu, điểm
                    tựa niềm tin vững chắc cho khách hàng, đối tác tin cậy với
                    hãng công nghệ.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="title-gt">
                  <img
                    src="https://png.pngtree.com/png-vector/20210904/ourlarge/pngtree-best-quality-icon-png-image_3869630.jpg"
                    alt="icon"
                    style={{
                      width: "70px",
                      margin: "0 auto",
                      marginBottom: "30px",
                    }}
                  />
                  <h5>Thân thiện</h5>
                  <p>
                    Hình ảnh thân thiện với khách hàng và tích cực trong các
                    hoạt động cộng đồng xã hội chính là hướng đi lâu dài và bền
                    vững.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12">
                <div className="title-gt">
                  <img
                    src="https://png.pngtree.com/png-vector/20210904/ourlarge/pngtree-best-quality-icon-png-image_3869630.jpg"
                    alt="icon"
                    style={{
                      width: "70px",
                      margin: "0 auto",
                      marginBottom: "30px",
                    }}
                  />
                  <h5>Chăm sóc</h5>
                  <p style={{ marginBottom: "30px" }}>
                    Phục vụ khách hàng là ưu tiên số 1, hoàn thiện chất lượng
                    dịch vụ, nhân viên nhiệt tình, trung thực, chân thành, giúp
                    khách hàng hài lòng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageIntroduction;
