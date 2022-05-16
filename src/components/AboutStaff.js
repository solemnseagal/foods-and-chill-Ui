import Staff1 from "../assets/image13.jpg";
import Staff2 from "../assets/image14.jpg";
import Staff3 from "../assets/image15.jpg";
import Staff4 from "../assets/image11.jpg";

function AboutStaff() {
  return (
    <div className="container mt">
      <div
        className="text-center wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.5s",
          animationName: "fadeInUp",
        }}
      >
        <h5 className="section-title ff-secondary text-center test fw-normal">
          Team Members
        </h5>
        <h1 className="mb-5">Our Chief Chefs</h1>
      </div>
      <div className="fullWidth ai-c jc-c row">
        <div
          className="col-lg-3 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp",
          }}
        >
          <div className="cart-container text-center rounded overflow-hidden">
            <div className="rounded-circle img-container overflow-hidden mt-4">
              <img className="img-fluid" src={Staff1} alt="" />
            </div>
            <div>
              <h5 className="mb-0">Drey</h5>
              <small>Captain Chef</small>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 wow fadeInUp"
          data-wow-delay="0.3s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp",
          }}
        >
          <div className="cart-container text-center rounded overflow-hidden">
            <div className="rounded-circle img-container overflow-hidden mt-4">
              <img className="img-fluid" src={Staff2} alt="" />
            </div>
            <h5 className="mb-0">Mike</h5>
            <small>Chef</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 wow fadeInUp"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp",
          }}
        >
          <div className="cart-container text-center rounded overflow-hidden">
            <div className="rounded-circle img-container overflow-hidden mt-4">
              <img className="img-fluid" src={Staff3} alt="" />
            </div>
            <h5 className="mb-0">Ruth</h5>
            <small>Chief Chef</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-6 wow fadeInUp"
          data-wow-delay="0.7s"
          style={{
            visibility: "visible",
            animationDelay: "0.7s",
            animationName: "fadeInUp",
          }}
        >
          <div className="cart-container text-center rounded overflow-hidden">
            <div className="rounded-circle img-container overflow-hidden mt-4">
              <img className="img-fluid" src={Staff4} alt="" />
            </div>
            <h5 className="mb-0">Chris</h5>
            <small>Chef</small>
            <div className="d-flex justify-content-center mt-3">
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
              <a className="btn btn-square btn-success mx-1" href="/"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStaff;
